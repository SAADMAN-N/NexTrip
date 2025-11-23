import React from "react";
import Image from "next/image";
import { Hotel } from "./ChatBox";
import { Banknote, ExternalLink, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  hotel: Hotel;
};

function HotelCardItem({ hotel }: Props) {
  return (
    <div className="flex flex-col gap-1 ">
      <Image
        src={"/placeholder.png"}
        alt="place-image"
        width={400}
        height={200}
        className="rounded-xl shadow object-cover mb-2"
      />
      <h2 className="font-semibold text-lg text-black">{hotel?.hotel_name}</h2>
      <h2 className="font-semibold text-gray-500 text-xs">
        {hotel?.hotel_address}
      </h2>
      <div className=" flex justify-between items-center">
        <p className="flex items-center gap-1 text-green-600 text-xs">
          <Banknote />
          {hotel?.price_per_night}
        </p>
        <div className="flex gap-1 text-yellow-500 text-xs">
          <Star size={15} />
          {hotel?.rating}
        </div>
      </div>
      {/* <p className="line-clamp-2 text-gray-500 text-xs">
            {hotel?.description}
          </p> */}
      <Link
        href={
          "https://www.google.com/maps/search/?api=1&query=" + hotel?.hotel_name
        }
        target="_blank"
      >
        <Button variant={"outline"} className="mt-1 w-full cursor-pointer">
          View <ExternalLink />
        </Button>
      </Link>
    </div>
  );
}

export default HotelCardItem;
