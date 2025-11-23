"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader, Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import EmptyBoxState from "./EmptyBoxState";
import GroupSizeUi from "./GroupSizeUi";
import BudgetUi from "./BudgetUi";
import DayCountUi from "./DayCountUi";
import FinalUi from "./FinalUi";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUserDetail } from "@/app/provider";
import { uuid } from "uuidv4";

type Message = {
  role: string;
  content: string;
  ui?: string;
};

export type TripInfo = {
  destination: string;
  duration: string;
  origin: string;
  budget: string;
  group_size: string;
  hotels: any;
  itenerary: any;
};

function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isFinal, setIsFinal] = useState(false);
  const [tripDetail, setTripDetail] = useState();
  const SaveTripDetail = useMutation(api.tripDetail.CreateTripDetail);
  const { userDetail, setUserDetail } = useUserDetail();

  const onSend = async () => {
    if (!userInput.trim()) return;
    setLoading(true);
    setUserInput("");
    const newMsg: Message = {
      role: "user",
      content: userInput,
    };
    setMessages((prev: Message[]) => [...prev, newMsg]);
    const result = await axios.post("/api/aimodel", {
      messages: [...messages, newMsg],
      isFinal: isFinal,
    });

    console.log("TRIP", result.data);

    !isFinal &&
      setMessages((prev: Message[]) => [
        ...prev,
        {
          role: "assistant",
          content: result?.data?.resp,
          ui: result?.data?.ui,
        },
      ]);
    console.log("AI Response:", result.data);
    console.log("UI value:", result?.data?.ui);

    if (isFinal) {
      setTripDetail(result?.data?.trip_plan);
      const tripId = uuid();
      await SaveTripDetail({
        tripDetail: result?.data?.trip_plan,
        tripId: tripId,
        uid: userDetail?._id,
      });
    }

    setLoading(false);
  };

  const RenderGenerativeUi = (ui: string) => {
    const uiLower = ui?.toLowerCase();
    if (uiLower == "budget") {
      return (
        <BudgetUi
          onSelectOption={(v: string) => {
            setUserInput(v);
            onSend();
          }}
        />
      );
    } else if (uiLower == "groupsize") {
      return (
        <GroupSizeUi
          onSelectOption={(v: string) => {
            setUserInput(v);
            onSend();
          }}
        />
      );
    } else if (uiLower == "tripduration") {
      return (
        <DayCountUi
          onSelectOption={(v: string) => {
            setUserInput(v);
            onSend();
          }}
        />
      );
    } else if (uiLower == "final") {
      return (
        <FinalUi
          tripDetail={tripDetail}
          viewTrip={() => {
            // Handle view trip action
            console.log("View trip clicked");
          }}
        />
      );
    }
    return null;
  };

  useEffect(() => {
    const lastMsg = messages[messages.length - 1];
    if (lastMsg?.ui == "Final") {
      setIsFinal(true);
      setUserInput("Ok, Great!");
    }
  }, [messages]);

  useEffect(() => {
    if (isFinal && userInput) {
      onSend();
    }
  }, [isFinal]);

  return (
    <div className="h-[85vh] flex flex-col">
      {messages?.length == 0 && (
        <EmptyBoxState
          onSelectOption={(v: string) => {
            setUserInput(v);
            onSend();
          }}
        />
      )}
      {/* Display Messages */}
      <section className="flex-1 overflow-y-auto p-4">
        {messages.map((msg: Message, index) =>
          msg.role == "user" ? (
            <div className="flex justify-end mt-2" key={index}>
              <div className="max-w-lg bg-primary text-black px-4 py-2 rounded-lg">
                {msg.content}
              </div>
            </div>
          ) : (
            <div className="flex justify-start mt-2" key={index}>
              <div className="max-w-lg bg-gray-300 text-black px-4 py-2 rounded-lg">
                {/* Show AI's personalized message - for Final UI it will be the thank you with trip details */}
                {msg.content && (
                  <p
                    className={msg.ui?.toLowerCase() === "final" ? "mb-4" : ""}
                  >
                    {msg.content}
                  </p>
                )}
                {RenderGenerativeUi(msg.ui ?? "")}
              </div>
            </div>
          )
        )}
        {loading && (
          <div className="flex justify-start mt-2">
            <div className="max-w-lg bg-gray-300 text-white px-4 py-2 rounded-lg">
              <Loader className="animate-spin text-black" />
            </div>
          </div>
        )}
      </section>

      {/* User Input */}
      <section className="">
        <div className="border rounded-2xl p-4 relative">
          <Textarea
            placeholder="Start typing here..."
            className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"
            onChange={(event) => setUserInput(event.target.value)}
            value={userInput}
          />
          <Button
            className="absolute bottom-6 right-6"
            size={"icon"}
            onClick={() => onSend()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}

export default ChatBox;
