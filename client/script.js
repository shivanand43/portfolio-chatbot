//script.js
import { sendMessage as sendApiMessage } from "./api/chatApi.js";
const chatIcon = document.getElementById("chatIcon");

const chatContainer =
document.getElementById("chatContainer");

const closeBtn =
document.getElementById("closeBtn");

const sendBtn =
document.getElementById("sendBtn");


const messageInput =
document.getElementById("messageInput");
const chatMessages =
document.getElementById("chatMessages");

const questionButtons =
document.querySelectorAll(".question-btn");



/* OPEN CHATBOX */

chatIcon.addEventListener("click", () => {

  chatContainer.style.display = "flex";

});

let isDragging = false;


chatIcon.addEventListener("mousedown", () => {

  isDragging = true;

});


document.addEventListener("mousemove", (event) => {

  if(isDragging){
let x = event.clientX - 30;
let y = event.clientY - 30;


/* SCREEN WIDTH */

const maxX =
window.innerWidth - 60;

const maxY =
window.innerHeight - 60;


/* PREVENT OVERFLOW */

if(x < 0){
  x = 0;
}

if(y < 0){
  y = 0;
}

if(x > maxX){
  x = maxX;
}

if(y > maxY){
  y = maxY;
}


/* APPLY POSITION */

chatIcon.style.left = x + "px";

chatIcon.style.top = y + "px";


    chatIcon.style.right = "auto";
    chatIcon.style.bottom = "auto";

  }

});


document.addEventListener("mouseup", () => {

  isDragging = false;

});


/* CLOSE CHATBOX */

closeBtn.addEventListener("click", () => {

  chatContainer.style.display = "none";

});


/* SEND MESSAGE */

sendBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keydown", (event) => {

  if(event.key === "Enter"){

    sendMessage();

  }

});

let isSending = false;

async function sendMessage() {

  const message = messageInput.value.trim();

  if (message === "") return;

  if (isSending) return;

  isSending = true;

  const userDiv = document.createElement("div");
  userDiv.classList.add("user-message");
  userDiv.innerText = message;

  chatMessages.appendChild(userDiv);

  messageInput.value = "";

  const typingDiv = document.createElement("div");

  typingDiv.classList.add("bot-message");

  typingDiv.innerHTML = `
    <div class="typing-animation">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;

  chatMessages.appendChild(typingDiv);

  chatMessages.scrollTop =
  chatMessages.scrollHeight;

  try {

    const botReply =
    await sendApiMessage(message);

    typingDiv.remove();

    const botDiv =
    document.createElement("div");

    botDiv.classList.add("bot-message");

    // botDiv.innerText = botReply;
    if (botReply.includes("<a")) {
  botDiv.innerHTML = botReply;
} else {
  botDiv.innerText = botReply;
}

    chatMessages.appendChild(botDiv);

  } catch (error) {

    console.error(error);

    typingDiv.remove();

    const errorDiv =
    document.createElement("div");

    errorDiv.classList.add("bot-message");

    errorDiv.innerText =
    "Something went wrong. Please try again.";

    chatMessages.appendChild(errorDiv);

  } finally {

    isSending = false;

    chatMessages.scrollTop =
    chatMessages.scrollHeight;
  }
}


/* QUICK BUTTON CLICK */

questionButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const question =
    button.innerText;

    messageInput.value = question;

    sendMessage();

  });

});



/* BOT REPLIES */



setTimeout(()=>{
         chatContainer.style.display="flex"
},5000)
/* STOP WAVE AFTER 5 SECONDS */

/* CHANGE HAND TO MESSAGE ICON */

setTimeout(() => {

  const waveHand =
  document.querySelector(".wave-hand");
  waveHand.style.animation = "none";
  waveHand.innerText = "💬";
}, 5000);