import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    "X-Title": "NexTrip - AI Trip Planner",
  },
});

const PROMPT = `You are an AI Trip Planner Agent. Your goal is to help the user plan a trip by asking one relevant trip-related question at a time.

Only ask questions about the following details in order, and wait for the user's answer before asking the next: 

1. Starting location (source) 
2. Destination city or country 
3. Group size (Solo, Couple, Family, Friends) 
4. Budget (Low, Medium, High) 
5. Trip duration (number of days) 
6. Travel interests (e.g., adventure, sightseeing, cultural, food, nightlife, relaxation) 
7. Special requirements or preferences (if any)

Do not ask multiple questions at once, and never ask irrelevant questions.
If any answer is missing or unclear, politely ask the user to clarify before proceeding.
Always maintain a conversational, interactive style while asking questions.
Along wth response also send which ui component to display for generative UI for example 'budget/groupSize/TripDuration/Final) , where Final means AI generating complete final output.

When all required information is collected and you set ui to "Final", your resp should be a personalized thank you message that includes the trip details. For example: "Thank you for the info! I'm now generating a tailored itinerary for your 7-day solo trip from New York to Tulum with a medium budget. This might take a moment."

IMPORTANT: When ui is "Final", do NOT include any itinerary details in the resp. Only include the personalized thank you message with trip summary. The itinerary will be generated separately.

Once all required information is collected, generate and return a **strict JSON response only** (no explanations or extra text) with following JSON schema:

IMPORTANT: You MUST respond with ONLY valid JSON object. Do NOT use markdown code blocks, do NOT include \`\`\`json or \`\`\` tags, do NOT add any explanations or text outside the JSON. Return ONLY the raw JSON object.

The JSON schema you must follow:
{

resp:'Text Resp',

ui:'budget/groupSize/TripDuration/Final)'

}`;

const FINAL_PROMPT = `Generate Travel Plan with give details, give me Hotels options list with HotelName, 

Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and  suggest itinerary with placeName, Place Details, Place Image Url,

 Geo Coordinates,Place address, ticket Pricing, Time travel each of the location , with each day plan with best time to visit in JSON format.

 Output Schema:

 {

  "trip_plan": {

    "destination": "string",

    "duration": "string",

    "origin": "string",

    "budget": "string",

    "group_size": "string",

    "hotels": [

      {

        "hotel_name": "string",

        "hotel_address": "string",

        "price_per_night": "string",

        "hotel_image_url": "string",

        "geo_coordinates": {

          "latitude": "number",

          "longitude": "number"

        },

        "rating": "number",

        "description": "string"

      }

    ],

    "itinerary": [

      {

        "day": "number",

        "day_plan": "string",

        "best_time_to_visit_day": "string",

        "activities": [

          {

            "place_name": "string",

            "place_details": "string",

            "place_image_url": "string",

            "geo_coordinates": {

              "latitude": "number",

              "longitude": "number"

            },

            "place_address": "string",

            "ticket_pricing": "string",

            "time_travel_each_location": "string",

            "best_time_to_visit": "string"

          }

        ]

      }

    ]

  }

}`;

export async function POST(req: NextRequest) {
  const { messages, isFinal } = await req.json();

  try {
    const completion = await openai.chat.completions.create({
      model: "x-ai/grok-4.1-fast",
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: isFinal ? FINAL_PROMPT : PROMPT },
        ...messages,
      ],
    });
    console.log(completion.choices[0].message);
    const message = completion.choices[0].message;
    const content = message.content ?? "";

    // Parse JSON - handle escaped characters
    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch (parseError) {
      // If parsing fails, try to extract JSON from the content
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        throw parseError;
      }
    }

    console.log("Parsed response:", parsed);
    return NextResponse.json(parsed);
  } catch (e) {
    console.error("API Error:", e);
    return NextResponse.json(
      { error: "Failed to process request", details: String(e) },
      { status: 500 }
    );
  }
}
