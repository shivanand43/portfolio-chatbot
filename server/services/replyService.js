const keywordMatcher = require("../utils/keywordMatcher");

function replyService(message) {
  const matchedAnswer = keywordMatcher(message);

  if (matchedAnswer) {
    return matchedAnswer;
  }

  return `I don't currently have information about that topic.

For more details, please feel free to contact me directly:

📞 9980875981
📧 shivanandpatil55550@gmail.com

I'll be happy to answer your questions.`;
}

module.exports = replyService;