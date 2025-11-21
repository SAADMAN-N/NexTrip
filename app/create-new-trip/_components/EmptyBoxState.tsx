import { suggestions } from "@/app/_components/Hero";
import React from "react";

function EmptyBoxState({ onSelectOption }: any) {
  return (
    <div className="mt7">
      <h2
        className="font-bold text-5xl text-center"
        style={{ fontFamily: "var(--font-instrument-serif)" }}
      >
        Start Planning Your Next <strong className="text-primary">Trip </strong>
        using AI
      </h2>
      <p className="text-center text-gray-500 mt-2 text-sm">
        Discover the best flights, hotels, and activities for your trip
        effortlesly with the power of AI. Let our smart AI agent handle the hard
        work for you while you relax and enjoy your trip.
      </p>

      <div className="flex flex-col gap-5 mt-5">
        {suggestions.map((suggestions, index) => (
          <div
            key={index}
            onClick={() => onSelectOption(suggestions.title)}
            className="flex items-center gap-2 border rounded-xl p-3 cursor-pointer hover:border-primary hover:bg-gray-700 "
          >
            {suggestions.icon}
            <h2 className="text-lg">{suggestions.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmptyBoxState;
