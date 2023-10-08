import OpenAI from "openai";

import TripData from "../models/TripData.js";

export const generator = async (req, res) => {
  const { city, duration, uid } = req.body;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API,
  });

  const format = `Generate a ${duration}-day trip itinerary for ${city} in JSON format. The JSON should have the following structure:

  {
    "places": [
      {
        "day": 1,
        "activities": [
          ["Arrival and Check-in", [latitude & longitude of place]],
          ["Gateway of India", [latitude & longitude of place]],
          ["Elephanta Caves", [latitude & longitude of place]]
        ]
      },    
      // Add more days as per user request with activities and coordinates here.
    ]
  }`;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-16k",
    temperature: 1,
    messages: [
      {
        role: "system",
        content:
          "You provide itineraries for trips in a structured JSON format. The duration and city is given by the user",
      },
      {
        role: "user",
        content: format,
      },
    ],
  });

  const parsedJSON = JSON.parse(response.choices[0].message.content);

  parsedJSON.user_id = uid;
  parsedJSON.city = city;

  const newData = new TripData(parsedJSON);

  newData.save();

  return res.json({ message: "itinerary generated in backend" });

  // console.log(parsedJSON[1].activities);
};
