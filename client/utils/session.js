function getSessionId() {
  let sessionId = localStorage.getItem("chatbotSession");

  if (!sessionId) {
    sessionId = `session_${Date.now()}`;
    localStorage.setItem("chatbotSession", sessionId);
  }

  return sessionId;
}

export default getSessionId;