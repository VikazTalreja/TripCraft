import OpenAI from "openai";
import axios from "axios";

export const chatbot = async (req, res) => {
  const prompt = req.body.messages;

  const openai = new OpenAI({});

  const options = {
    method: "POST",
    url: "https://api.edenai.run/v2/text/chat",
    headers: {
      authorization: `Bearer ${process.env.EDENAI_API}`,
    },
    data: {
      show_original_response: false,
      fallback_providers: "",
      providers: "openai",
      text: `${prompt}`,
      chatbot_global_action:
        "You are a chatbot that helps people by giving best places to travel and itineraries. DO NOT REPLY TO ANY OTHER QUERIES WHICH ARE NOT RELATED TO TRAVEL",
      previous_history: [],
      temperature: 0.0,
      max_tokens: 3800,
    },
  };

  const reply = await axios.request(options);
  console.log(reply.data.openai.generated_text);

  return res.send(reply.data.openai.generated_text);

  // const response = await openai.chat.completions.create({
  //   model: "gpt-3.5-turbo-16k",
  //   temperature: 1,
  //   messages: [
  //     {
  //       role: "system",
  //       content:
  //         "You are a chatbot that helps people by giving best places to travel and itineraries",
  //     },
  //     { role: "user", content: prompt },
  //   ],
  // });

  // console.log(response.data.choices[0].message.content);

  // return res.json(response);
};
