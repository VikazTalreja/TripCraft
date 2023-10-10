import OpenAI from "openai";
import axios from "axios";

import TripData from "../models/TripData.js";

export const generator = async (req, res) => {
  const { city, duration, uid } = req.body;

  const format = `Generate a ${duration}-day trip itinerary for ${city} in JSON format. STRICTLY DONT RETURN ANYTHING ELSE APART FROM THE REQUIRED JSON FILE. NO EXTRA TEXT. ALSO NO ERRORS IN SYNTAX OF JSON FILE. The JSON should have the following structure:

  {
    "places": [
      {
        "day": 1,
        "activities": [
          "[place 1",[latitude of place, longitude of place]],
          "[place 2",[latitude of place, longitude of place]],
          "[place 3",[latitude of place, longitude of place]]
        ]
      },    
      // Add more days as per user request with activities here.
    ]
  }`;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API,
  });

  const options = {
    method: "POST",
    url: "https://api.edenai.run/v2/text/chat",
    headers: {
      authorization: `Bearer ${process.env.EDEN_AI_API}`,
    },
    data: {
      show_original_response: false,
      fallback_providers: "",
      providers: "openai",
      text: `${format}`,
      chatbot_global_action:
        "Act as an assistant which provides itineraries in JSON FORMAT STRICTLY WITH NO EXTRA TEXT",
      previous_history: [],
      temperature: 0.0,
      max_tokens: 3800,
    },
  };

  const response = await axios.request(options);
  const parsedJSON = JSON.parse(response.data.openai.generated_text);
  // const parsedJSON = JSON.parse(response.data.openai.generated_text);
  // console.log(parsedJSON);

  // const response = await openai.chat.completions.create({
  //   model: "gpt-3.5-turbo-16k",
  //   temperature: 1,
  //   messages: [
  //     {
  //       role: "system",
  //       content:
  //         "You provide itineraries for trips in a structured JSON format. The duration and city is given by the user",
  //     },
  //     {
  //       role: "user",
  //       content: format,
  //     },
  //   ],
  // });

  parsedJSON.user_id = uid;
  parsedJSON.city = city;

  // console.log(parsedJSON);

  // console.log(parsedJSON.places[0].activities);

  const newData = new TripData(parsedJSON);

  newData.save();

  return res.json({ message: "itinerary generated in backend" });
};
