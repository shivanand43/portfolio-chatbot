const Chat = require("../models/Chat");
const replyService = require("../services/replyService");

const chatController = async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    const botReply = replyService(message);

    await Chat.create({
      userMessage: message,
      botReply,
      sessionId,
      userAgent: req.headers["user-agent"],
    });
console.log({
  userMessage: message,
  botReply,
  sessionId,
  userAgent: req.headers["user-agent"],
});
    res.status(200).json({
      success: true,
      reply: botReply,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = chatController;