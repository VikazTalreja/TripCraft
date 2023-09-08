import axios from "axios";

const handleCLick = async (e) => {
  e.preventDefault();
  const _prompt = document.getElementById("prompt-input");
  const messageArea = document.getElementById("m-area");

  console.log(_prompt);

  const sent = document.createElement("div");
  const recieve = document.createElement("div");

  sent.innerHTML = _prompt.value;
  console.log(sent);
  messageArea.appendChild(sent);
  sent.classList.add("sent");
  sent.classList.add("sent-wrapper");

  try {
    const response = await axios.post("http://localhost:8000/chatbot", {
      message: _prompt.value,
    });
    // console.log(response);
    recieve.innerHTML = response.data;
  } catch (error) {
    console.log(error);
    recieve.innerHTML = error;
  }

  messageArea.appendChild(recieve);
  recieve.classList.add("recieved");
};

export default handleCLick;
