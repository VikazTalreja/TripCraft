import OpenAI from "openai";

import TripData from "../models/TripData.js";

export const generator = async (req, res) => {
  const { city, duration, uid } = req.body;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API,
  });

  const format = `Generate a ${duration}-day trip itinerary for ${city} in JSON format. STRICTLY DONT RETURN ANYTHING ELSE APART FROM THE REQUIRED JSON FILE. NO EXTRA TEXT. The JSON should have the following structure:

  {
    "places": [
      {
        "day": 1,
        "activities": [
          "[Arrival and Check-in",[latitude of place, longitude of place]],
          "[Gateway of India",[latitude of place, longitude of place]],
          "[Elephanta Caves",[latitude of place, longitude of place]]
        ]
      },    
      // Add more days as per user request with activities here.
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

  console.log(parsedJSON);

  console.log(parsedJSON.places[0].activities);

  const newData = new TripData(parsedJSON);

  newData.save();

  return res.json({ message: "itinerary generated in backend" });

  // console.log(parsedJSON[1].activities);
};
