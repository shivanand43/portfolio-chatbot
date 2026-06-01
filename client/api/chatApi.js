import getSessionId from "../utils/session.js";

export async function sendMessage(message) {
  try {
    const response = await fetch(
  "https://portfolio-chatbot-1-rar6.onrender.com/api/chat",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      sessionId: getSessionId(),
    }),
  }
);

    const data = await response.json();

    return data.reply;
  } catch (error) {
    console.error(error);

    return "Server is currently unavailable.";
  }
}