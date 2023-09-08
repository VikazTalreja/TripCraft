import axios from "axios";

const handleCLick = async (e) => {
  e.preventDefault();
  const _prompt = document.getElementById("prompt-input");
  const messageArea = document.getElementById("m-area");

  console.log(_prompt.value);

  const sent = document.createElement("div");
  console.log("success");
  const recieve = document.createElement("div");
  console.log("success");
  const sentWrapper = document.createElement("div");
  console.log("success");

  try {
    messageArea.appendChild(sentWrapper);
    console.log("success in try block");
  } catch (error) {
    console.log(error);
  }

  try {
    sentWrapper.classList.add("sent-wrapper");
    sentWrapper.appendChild(sent);
    sent.classList.add("sent");
    console.log("success in try block");
  } catch (error) {
    console.log(error);
  }

  try {
    sent.innerHTML = _prompt.value;
  } catch (error) {
    console.log(error);
  }
  _prompt.value = "";

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
