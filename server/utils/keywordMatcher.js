const chatbotKnowledge = require("../data/chatbotKnowledge");

function keywordMatcher(message) {
  const userMessage = message.toLowerCase();

  for (const item of chatbotKnowledge) {
    for (const keyword of item.keywords) {
      if (userMessage.includes(keyword.toLowerCase())) {
        return item.answer;
      }
    }
  }

  return null;
}

module.exports = keywordMatcher;