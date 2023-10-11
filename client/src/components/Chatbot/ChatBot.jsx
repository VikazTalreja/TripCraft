import React, { useEffect } from "react";
import axios from "axios";

import "./ChatBot.css";
import send from "../../assets/send.png";
import msg from "../../assets/icon.png";

const ChatBot = () => {
  useEffect(() => {
    const open = document.getElementById("open-button");
    const window = document.getElementById("chatbot-window");
    const close = document.getElementById("close-button");

    open.addEventListener("click", () => {
      window.classList.remove("display-none");
      open.classList.add("display-none");
    });

    close.addEventListener("click", () => {
      window.classList.add("display-none");
      open.classList.remove("display-none");
    });
  }, []);

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
      const answer = response.data;
      const formattedAnswer = answer.replace(/\n/g, "<br>");
      console.log(answer);
      reply.innerHTML = formattedAnswer;
    } catch (err) {
      console.log(err);
    }
    chatWindow.appendChild(reply);
    reply.classList.add("bot-message");
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-window display-none" id="chatbot-window">
        <div className="cb-heading">
          <span>OpenAI Chatbot</span>
          <i class="fa-solid fa-chevron-down" id="close-button"></i>
        </div>
        <div className="chat-window" id="chat-window"></div>
        <div className="chat-input">
          <form autoComplete="false" onSubmit={submitHandle} id="chatbot-form">
            <input placeholder="enter query" id="user-input" type="text" />
            <div className="icon-box" onClick={submitHandle}>
              <img src={send} alt="" width={20} height={20} />
            </div>
          </form>
        </div>
      </div>
      <div className="button-wrapper" id="open-button">
        <div className="open-button">
          <img src={msg} width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
