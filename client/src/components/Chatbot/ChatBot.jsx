import React from "react";
import axios from "axios";

import "./ChatBot.css";
import send from "../../assets/send.png";

const ChatBot = () => {
  const submitHandle = async (e) => {
    e.preventDefault();

    const sent = document.createElement("div");
    const reply = document.createElement("div");
    const chatWindow = document.getElementById("chat-window");

    const input = document.getElementById("user-input");
    const prompt = input.value;

    chatWindow.appendChild(sent);
    sent.innerHTML = prompt;
    sent.classList.add("user-message");
    input.value = "";

    try {
      const response = await axios.post(
        "http://localhost:8080/chatbot/response",
        {
          messages: prompt,
        }
      );
      const answer = response.data.choices[0].message.content;
      console.log(answer);
      reply.innerHTML = answer;
    } catch (err) {
      console.log(err);
    }
    chatWindow.appendChild(reply);
    reply.classList.add("bot-message");
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-window">
        <div className="cb-heading">OpenAI Chatbot</div>
        <div className="chat-window" id="chat-window"></div>
        <div className="chat-input">
          <form onSubmit={submitHandle} id="chatbot-form">
            <input placeholder="enter query" id="user-input" type="text" />
            <div className="icon-box" onClick={submitHandle}>
              <img src={send} alt="" width={20} height={20} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
