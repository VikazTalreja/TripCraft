import React, { useEffect } from "react";

import icon from "../../assets/icon.png";

import "./chatbot.css";
import handleCLick from "./script";

const Chatbot = () => {
  useEffect(() => {
    const botButton = document.getElementById("button-wrapper");
    const downButton = document.getElementById("bt-down");
    const chatBot = document.getElementById("chat-bot");

    botButton.addEventListener("click", () => {
      chatBot.classList.remove("display-none");
      botButton.classList.add("display-none");
    });

    downButton.addEventListener("click", () => {
      chatBot.classList.add("display-none");
      botButton.classList.remove("display-none");
    });
  });
  return (
    <div className="cbot">
      <div className="chatbot-wrapper display-none" id="chat-bot">
        <div className="chatbot">
          <div className="heading">
            <h4>
              <span id="logo">TripCrafter</span> - Your personal AI travel
              assisstant
            </h4>
            <i class="fa-solid fa-chevron-down" id="bt-down"></i>
          </div>
          <div className="message-area" id="m-area"></div>
          <div className="message-input">
            <input
              type="text"
              id="prompt-input"
              placeholder="Enter your message"
            ></input>
            <button onClick={handleCLick} className="send-button">
              Send
            </button>
          </div>
        </div>
      </div>
      <div id="button-wrapper">
        <div id="bot-button" className="chatbot-opener">
          <img id="bot-icon" width={30} height={30} src={icon} alt="message" />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
