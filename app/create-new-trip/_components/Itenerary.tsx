import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import {
  Banknote,
  Clock,
  Coins,
  ExternalLink,
  Star,
  Ticket,
  Timer,
  Wallet,
  Wallet2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HotelCardItem from "./HotelCardItem";
import PlaceCardItem from "./PlaceCardItem";

const TRIP_DATA = {
  destination: "Goa",
  duration: "2 days",
  origin: "Mumbai",
  budget: "Moderate",
  group_size: "Solo",
  hotels: [
    {
      hotel_name: "Lemon Tree Amarante Beach Resort",
      hotel_address: "White Sand Road, Candolim, Goa 403515",
      price_per_night: "₹3500 - ₹4500",
      hotel_image_url:
        "https://cf.bstatic.com/images/hotel/max1024x768/218/218490147.jpg",
      geo_coordinates: {
        latitude: 15.4984,
        longitude: 73.7531,
      },
      rating: 4.3,
      description:
        "Beachfront resort with pool, spa, and modern rooms. Perfect for solo travelers seeking relaxation and proximity to adventure spots in North Goa.",
    },
    {
      hotel_name: "Colonia Santa Maria",
      hotel_address: "Gauravaddo, Calangute, Goa 403516",
      price_per_night: "₹2500 - ₹3500",
      hotel_image_url:
        "https://cf.bstatic.com/images/hotel/max1024x768/104/104567891.jpg",
      geo_coordinates: {
        latitude: 15.5342,
        longitude: 73.7624,
      },
      rating: 4.1,
      description:
        "Boutique hotel near Calangute Beach with cozy rooms, rooftop pool, and easy access to beach shacks for Goan food and water sports.",
    },
    {
      hotel_name: "La Mar Beach Resort",
      hotel_address: "Umta Vaddo, Calangute, Goa 403516",
      price_per_night: "₹3000 - ₹4000",
      hotel_image_url:
        "https://cf.bstatic.com/images/hotel/max1024x768/156/156789012.jpg",
      geo_coordinates: {
        latitude: 15.5301,
        longitude: 73.7589,
      },
      rating: 4.2,
      description:
        "Affordable beach resort offering adventure packages like parasailing, delicious seafood dining, and cultural vibes in bustling Calangute.",
    },
  ],
  itinerary: [
    {
      day: 1,
      day_plan:
        "Arrival from Mumbai, beach exploration, water sports adventure, and sunset beach shack dining in North Goa.",
      best_time_to_visit_day: "October to March, early morning to evening",
      activities: [
        {
          place_name: "Calangute Beach",
          place_details:
            "Iconic beach for swimming, jet skiing, parasailing, and beach shack hopping for fresh seafood and Goan feni.",
          place_image_url:
            "https://images.unsplash.com/photo-1578602682766-342ae3ac7d10",
          geo_coordinates: {
            latitude: 15.5314,
            longitude: 73.762,
          },
          place_address: "Calangute Beach, Calangute, Goa 403516",
          ticket_pricing: "Free entry; Water sports ₹1000-₹2000 per activity",
          time_travel_each_location: "30-45 mins from airport by taxi",
          best_time_to_visit: "9 AM - 6 PM",
        },
        {
          place_name: "Baga Beach",
          place_details:
            "Lively beach with adventure sports, nightlife, and authentic Goan food at shacks like Britto's.",
          place_image_url:
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
          geo_coordinates: {
            latitude: 15.5667,
            longitude: 73.7397,
          },
          place_address: "Baga Beach, Baga, Goa 403516",
          ticket_pricing: "Free; Dolphin trips ₹1500",
          time_travel_each_location: "15 mins from Calangute",
          best_time_to_visit: "10 AM - 7 PM",
        },
      ],
    },
    {
      day: 2,
      day_plan:
        "Cultural sites, historical forts, local food tasting, and optional adventure before evening departure.",
      best_time_to_visit_day: "October to March, morning for cooler weather",
      activities: [
        {
          place_name: "Fort Aguada",
          place_details:
            "17th-century Portuguese fort with lighthouse, ocean views, and cultural history lessons.",
          place_image_url:
            "https://images.unsplash.com/photo-1600439515640-338f5d5cd543",
          geo_coordinates: {
            latitude: 15.4925,
            longitude: 73.7406,
          },
          place_address: "Sinquerim, Candolim, Goa 403515",
          ticket_pricing: "Free",
          time_travel_each_location: "20 mins from Calangute",
          best_time_to_visit: "8 AM - 12 PM",
        },
        {
          place_name: "Basilica of Bom Jesus",
          place_details:
            "UNESCO site with St. Francis Xavier relics, Baroque architecture, and insights into Goan Catholic culture.",
          place_image_url:
            "https://images.unsplash.com/photo-1583019452944-9e26e18f1a60",
          geo_coordinates: {
            latitude: 15.4994,
            longitude: 73.9129,
          },
          place_address: "Old Goa, Goa 403402",
          ticket_pricing: "Free",
          time_travel_each_location: "45 mins from Fort Aguada",
          best_time_to_visit: "9 AM - 1 PM",
        },
        {
          place_name: "Anjuna Flea Market",
          place_details:
            "Vibrant market for souvenirs, street food like prawn balchao, and hippie culture vibes (Wednesdays mainly).",
          place_image_url:
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19",
          geo_coordinates: {
            latitude: 15.5527,
            longitude: 73.7423,
          },
          place_address: "Anjuna Beach Road, Anjuna, Goa 403509",
          ticket_pricing: "Free",
          time_travel_each_location: "20 mins from Old Goa",
          best_time_to_visit: "10 AM - 4 PM",
        },
      ],
    },
  ],
};

function Itenerary() {
  const data = [
    {
      title: "Recommended Hotels",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TRIP_DATA?.hotels.map((hotel, index) => {
            return <HotelCardItem hotel={hotel} key={index} />;
          })}
        </div>
      ),
    },
    ...TRIP_DATA?.itinerary.map((dayData) => ({
      title: `Day ${dayData.day}`,
      content: (
        <div className="text-black">
          <p>Best Time: {dayData?.best_time_to_visit_day}</p>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
            {dayData?.activities.map((activity, index) => (
              <PlaceCardItem activity={activity} key={index} />
            ))}
          </div>
        </div>
      ),
    })),
  ];
  return (
    <div className="relative w-full h-[83vh] overflow-auto">
      <Timeline data={data} tripData={TRIP_DATA} />
    </div>
  );
}

export default Itenerary;
