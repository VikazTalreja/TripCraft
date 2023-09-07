const { OpenAI } = require("openai");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 8000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.set(PORT);

app.get("/", (req, res) => {
  return res.json({ success: "running" });
});

app.get("/harsh", (req, res) => {
  console.log(req.body);
  return res.status(200, "working");
});

app.post("/chatbot", async (req, res) => {
  // console.log(req);
  const { message } = req.body;
  console.log(message);

  const openai = new OpenAI({
    apiKey: "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",
  });

  const response = await openai.completions.create({
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 100,
    temperature: 1,
  });

  return res.json(response.choices[0].text);
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
