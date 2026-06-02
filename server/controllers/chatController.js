const Chat = require("../models/Chat");
const replyService = require("../services/replyService");

const chatController = async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    const start = Date.now();

    const botReply = replyService(message);

    await Chat.create({
      userMessage: message,
      botReply,
      sessionId,
      userAgent: req.headers["user-agent"],
    });

    console.log("================================");
    console.log("Message:", message);
    console.log("Session ID:", sessionId);
    console.log("Bot Reply:", botReply);
    console.log("Response Time:", Date.now() - start, "ms");
    console.log("User Agent:", req.headers["user-agent"]);
    console.log("================================");

    res.status(200).json({
      success: true,
      reply: botReply,
    });

  } catch (error) {
    console.error("CHAT CONTROLLER ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = chatController;