import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="mt-24 flex items-center">
      <Hero />
      <div>
        <h1>
          Hey, I'm your personal <span> Trip Planner</span>
        </h1>
      </div>
    </div>
  );
}
