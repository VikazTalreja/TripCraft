const sent = document.createElement("div");
sent.innerHTML = _prompt.value;
console.log(sent);
messageArea.appendChild(sent);
sent.classList.add("sent");
