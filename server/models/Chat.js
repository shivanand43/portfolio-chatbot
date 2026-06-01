const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  userMessage: String,
  botReply: String,
  userAgent:String,
  sessionId:String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chat", chatSchema);