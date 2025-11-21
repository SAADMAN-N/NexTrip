"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

function DayCountUi({ onSelectOption }: any) {
  const [days, setDays] = useState(3);

  const incrementDays = () => {
    setDays((prev) => prev + 1);
  };

  const decrementDays = () => {
    if (days > 1) {
      setDays((prev) => prev - 1);
    }
  };

  const handleConfirm = () => {
    const dayText = days === 1 ? "1 Day" : `${days} Days`;
    onSelectOption(`${days} Days`);
  };

  return (
    <div className="mt-4 flex flex-col items-center gap-4">
      <div className="flex items-center gap-4 border rounded-2xl p-4 bg-gray-200">
        <Button
          onClick={decrementDays}
          disabled={days <= 1}
          className="rounded-full w-10 h-10 p-0 bg-gray-300 hover:bg-gray-400 text-black disabled:opacity-50"
          size="icon"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <div className="text-2xl font-semibold min-w-[100px] text-center">
          {days} {days === 1 ? "Day" : "Days"}
        </div>
        <Button
          onClick={incrementDays}
          className="rounded-full w-10 h-10 p-0 bg-gray-300 hover:bg-gray-400 text-black"
          size="icon"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button
        onClick={handleConfirm}
        className="bg-primary text-black hover:bg-primary/90 px-8 py-2"
      >
        Confirm
      </Button>
    </div>
  );
}

export default DayCountUi;

