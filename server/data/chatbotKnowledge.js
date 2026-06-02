const chatbotKnowledge = [
  {
topic: "greeting",
keywords: [
"hi",
"hello",
"hey",
"good morning",
"good afternoon",
"good evening",
"hii",
"hlo"
],
answer:
"👋 Hello! Welcome to Shivanand Patil's portfolio assistant. I'm here to help you learn about his skills, projects, experience, notice period, availability, and more. Feel free to ask anything! 😊"
},

{
topic: "how_are_you",
keywords: [
"how are you",
"how are you doing",
"how's it going",
"what's up",
"how do you do"
],
answer:
"😊 I'm doing great! Thanks for asking. I'm here to help you explore Shivanand's professional background, technical skills, projects, and career details. What would you like to know?"
},

{
topic: "what_are_you_doing",
keywords: [
"what are you doing",
"what are you up to",
"busy",
"are you free"
],
answer:
"😎 I'm currently assisting visitors and recruiters by providing information about Shivanand Patil's experience, skills, projects, and career profile."
},

{
topic: "notice_period",
keywords: [
"notice period",
"joining",
"when can you join",
"ready to join",
"immediate joiner",
"availability",
"available to join",
"serving notice period"
],
answer:
"🚀 Shivanand is available to join immediately and is actively exploring new opportunities. He can discuss joining timelines based on company requirements."
},

{
topic: "relocation",
keywords: [
"relocation",
"relocate",
"willing to relocate",
"move to another city",
"work location",
"bangalore location",
"hyderabad location",
"pune location"
],
answer:
"📍 Shivanand is open to opportunities in Bangalore and can also consider relocation based on the role and opportunity. He is also comfortable with Remote and Hybrid work models."
},

{
topic: "remote_work",
keywords: [
"remote",
"work from home",
"wfh",
"hybrid",
"onsite"
],
answer:
"💻 Shivanand is comfortable working in Remote, Hybrid, and Onsite environments depending on the company's requirements."
},

{
topic: "hire",
keywords: [
"why should we hire you",
"why hire you",
"why are you suitable",
"why are you a good fit"
],
answer:
"⭐ Shivanand combines 1.5+ years of practical development experience with strong expertise in React.js, Next.js, React Native, Node.js, MongoDB, API integration, responsive design, and problem-solving. He focuses on building scalable, user-friendly applications and continuously improving his skills."
},

{
topic: "strengths",
keywords: [
"strengths",
"your strength",
"biggest strength",
"strong points"
],
answer:
"💪 Shivanand's strengths include quick learning, problem-solving, attention to detail, responsive UI development, API integration, teamwork, and ownership of features from development to deployment."
},

{
topic: "contact",
keywords: [
"contact",
"phone",
"email",
"reach you",
"get in touch"
],
answer:
"📞 Phone: 9980875981\n📧 Email: [shivanandpatil55550@gmail.com](mailto:shivanandpatil55550@gmail.com)\nFeel free to reach out regarding opportunities, collaborations, or technical discussions."
},

{
topic: "thanks",
keywords: [
"thank you",
"thanks",
"thx",
"thankyou"
],
answer:
"😊 You're welcome! If you'd like to know more about Shivanand's skills, projects, experience, or availability, feel free to ask."
}
,
  {
    topic: "about",
    keywords: [
      "about",
      "about yourself",
      "introduce yourself",
      "who are you",
      "tell me about yourself"
    ],
    answer:
      "Hi, I'm Shivanand Patil. I completed my BE in ECE from Government Engineering College, Haveri (VTU). I currently work as a Frontend Developer at Interioverse Design Pvt Ltd and have hands-on experience building responsive web and mobile applications using React.js, Next.js, React Native, Node.js, Express.js, and MongoDB."
  },

  {
    topic: "skills",
    keywords: [
      "skills",
      "tech stack",
      "technologies",
      "tools",
      "technical skills"
    ],
    answer:
      "My core skills include React.js, Next.js, React Native, JavaScript, Node.js, Express.js, MongoDB, Redux, Context API, REST APIs, JWT Authentication, Git, GitHub, Postman, Figma, HTML, CSS, and Responsive Design."
  },

  {
    topic: "experience",
    keywords: [
      "experience",
      "work experience",
      "years of experience",
      "current company"
    ],
    answer:
      "I currently work as a Frontend Developer at Interioverse Design Pvt Ltd and have around 1.5+ years of hands-on experience building web and mobile applications."
  },

  {
    topic: "interioverse",
    keywords: [
      "interioverse",
      "current company",
      "current job",
      "frontend developer",
            "where you are working now"

    ],
    answer:
      "At Interioverse, I work as a Frontend Developer where I build responsive dashboards, reusable UI components, integrate REST APIs, and collaborate with backend teams to deliver scalable applications."
  },

  {
    topic: "projects",
    keywords: [
      "projects",
      "project",
      "best project",
      "portfolio projects"
    ],
    answer:
      "My major projects include an Admin Dashboard built with Next.js, a Project Management Mobile App built with React Native, and a Smart Kirani Application designed to digitize local kirana store operations."
  },

  {
    topic: "smart kirani",
    keywords: [
      "smart kirani",
      "kirani app",
      "mobile app",
      "personal project"
    ],
    answer:
      "Smart Kirani is a React Native mobile application developed to digitize local kirana store operations. It includes product listing, cart management, order processing, and separate flows for customers, shop owners, and delivery personnel."
  },

  {
    topic: "education",
    keywords: [
      "education",
      "degree",
      "college",
      "graduation"
    ],
    answer:
      "I completed my Bachelor of Engineering in Electronics and Communication Engineering from Government Engineering College, Haveri under VTU Belagavi between 2021 and 2025."
  },

  {
    topic: "backend",
    keywords: [
      "backend",
      "node",
      "express",
      "mongodb",
      "api"
    ],
    answer:
      "I have experience building backend services using Node.js, Express.js, MongoDB, REST APIs, JWT Authentication, and API integration."
  },

  {
    topic: "contact",
    keywords: [
      "contact",
      "phone",
      "email",
      "reach you"
    ],
    answer:
      "You can contact me at shivanandpatil55550@gmail.com or call me at 9980875981."
  },
  {
  topic: "resume",
  keywords: [
    "resume",
    "cv",
    "download resume",
    "latest resume"
  ],
  answer:
  // '📄 <a href="http://localhost:5000/resume/shivanand_patil_Resume.pdf" target="_blank">Download Resume</a>'
  '📄 <a href="https://portfolio-chatbot-sandy.vercel.app/resume/shivanand_patil_Resume.pdf" target="_blank">Download Resume</a>'

}
];

module.exports = chatbotKnowledge;