import OpenAI from "openai";

export const chatbot = async (req, res) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = req.body.messages;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-16k",
    max_tokens: 4096,
    temperature: 1,
    messages: [{ role: "user", content: prompt }],
  });

  return res.json(response);
};
