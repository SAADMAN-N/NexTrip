import React from "react";
import Image from "next/image";
import { Clock, ExternalLink, Ticket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Activity } from "./ChatBox";

type Props = {
  activity: Activity;
};

function PlaceCardItem({ activity }: Props) {
  return (
    <div>
      <div>
        <Image
          src={"/placeholder.png"}
          alt={activity.place_name}
          width={400}
          height={200}
          className="object-cover rounded-xl"
        />
        <h2 className="font-semibold text-lg">{activity?.place_name}</h2>
        <p className="text-gray-500 line-clamp-1 text-xs">
          {activity.place_details}
        </p>
        <h2 className="flex gap-1 text-blue-500 text-sm">
          <Ticket />
          {activity?.ticket_pricing}
        </h2>

        <p className="flex text-orange-400 line-clamp-1 text-sm gap-1">
          <Clock size={20} />
          {activity?.best_time_to_visit}
        </p>
        <Link
          href={
            "https://www.google.com/maps/search/?api=1&query=" +
            activity?.place_name
          }
          target="_blank"
        >
          <Button
            size={"sm"}
            variant={"outline"}
            className="cursor-pointer text-white mt-2 w-full"
          >
            View <ExternalLink />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PlaceCardItem;
