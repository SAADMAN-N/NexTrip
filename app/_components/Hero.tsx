"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { ArrowDown, Divide, Globe2, Landmark, Plane, Send } from "lucide-react";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const suggestions = [
  {
    title: "Create a New Trip",
    icon: <Globe2 className="text-blue-400 h-5 w-5" />,
  },
  {
    title: "Inspire me where to go",
    icon: <Plane className="text-green-500 h-5 w-5" />,
  },
  {
    title: "Discover Hidden gems",
    icon: <Landmark className="text-orange-400 h-5 w-5" />,
  },
  {
    title: "I'm feeling adventurous",
    icon: <Globe2 className="text-yellow-600 h-5 w-5" />,
  },
];

function Hero() {
  const { user } = useUser();
  const router = useRouter();
  const onSend = () => {
    if (!user) {
      router.push("/sign-in");
      return;
    }
    // else nav to trip planner page
    router.push("/create-new-trip");
  };

  return (
    <div className="mt-24 w-full flex justify-center">
      {/* Content */}

      <div className="max-w-4xl w-full text-center space-y-6">
        <h1 className="text-xl md:text-5xl font-bold">
          Hey, I'm your personal{" "}
          <span className="text-primary"> Trip Planner</span>
        </h1>

        <p className="text-lg">
          Tell me what you want and I'll handle the rest: Flights, Hotels, Trip
          Planning
        </p>

        {/* Input Box */}

        <div>
          <div className="border rounded-2xl p-4 relative">
            <Textarea
              placeholder="Create a trip for Paris from New York"
              className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"
            />
            <Button
              className="absolute bottom-6 right-6"
              size={"icon"}
              onClick={() => onSend()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Suggestions List */}

        <div className="flex gap-5">
          {suggestions.map((suggestions, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border rounded-full p-2 cursor-pointer hover:bg-gray-700 hover:border-gray-100"
            >
              {suggestions.icon}
              <h2 className="text-sm">{suggestions.title}</h2>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center flex-col">
          <h2 className="m-7 mt-14 flex gap-2 text-center">
            {" "}
            Not sure where to start? <strong>See how it works!</strong>
            <ArrowDown />
          </h2>
        </div>

        {/* {Video Section} */}
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.example.com/dummy-video"
          thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduct.jpg?p=facebook"
          thumbnailAlt="Dummy Video Thumbnail"
        />
      </div>
    </div>
  );
}

export default Hero;
