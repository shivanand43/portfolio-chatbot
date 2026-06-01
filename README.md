# 🤖 Portfolio Recruiter Chatbot

A scalable full-stack portfolio chatbot built to help recruiters know more about me through an interactive chat experience.

This chatbot allows recruiters to:

* Ask about my skills
* View my projects
* Know my experience
* Contact me directly
* Interact with my portfolio in a modern way

The project is designed using a scalable architecture so it can later upgrade into:

* AI chatbot
* React/Next.js application
* Admin dashboard
* Analytics system

---

# 🚀 Project Goal

The main goal of this project is:

* To build my own recruiter assistant chatbot
* To learn full-stack development practically
* To understand frontend + backend architecture
* To implement MongoDB integration
* To learn API communication
* To improve problem-solving and debugging skills

---

# 🛠️ Tech Stack

## Frontend

* HTML
* CSS
* JavaScript

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## Deployment

* Vercel (Frontend)
* Railway / Render (Backend)

---

# 📁 Project Structure

```txt
portfolio-chatbot/
│
|_______client
|       ├── api
|       │   └── chatApi.js
|       ├── utils
|       │   └── session.js
|       ├── script.js
|       |── style.css
|       |__index.html
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

# ✨ Features

## Frontend Features

* Floating chatbot UI
* Responsive design
* Interactive chat interface
* Recruiter-friendly experience
* Dynamic messages
* Chat popup animation

---

## Backend Features

* REST API architecture
* Recruiter message handling
* Keyword matching system
* Fallback response system
* MongoDB chat storage
* Scalable backend structure

---

# ⚙️ Frontend Setup

## Step 1 — Create Root Folder

```bash
mkdir portfolio-chatbot
cd portfolio-chatbot
```

---

## Step 2 — Create Frontend Folder

```bash
mkdir client
```

---

## Step 3 — Create Frontend Files

Inside `client`:

```txt
index.html
style.css
script.js
```

---

## Step 4 — Connect Files

### index.html

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

---

# ⚙️ Backend Setup

## Step 1 — Create Backend Folder

```bash
mkdir server
cd server
```

---

## Step 2 — Initialize Node.js

```bash
npm init -y
```

---

## Step 3 — Install Packages

```bash
npm install express mongoose cors dotenv nodemon
```

---

# 📦 Packages Used

| Package  | Purpose                        |
| -------- | ------------------------------ |
| express  | Backend server                 |
| mongoose | MongoDB connection             |
| cors     | Frontend/backend communication |
| dotenv   | Environment variables          |
| nodemon  | Auto restart server            |

---

# 🌍 MongoDB Atlas Setup

## Step 1

Create MongoDB Atlas account.

## Step 2

Create a free cluster.

## Step 3

Create database user.

## Step 4

Get MongoDB connection URI.

Example:

```txt
mongodb+srv://username:password@cluster.mongodb.net/chatbotDB
```

---

# 🔐 Environment Variables

Create `.env` file inside `server`.

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_URI
```

---

# 🧠 Backend Architecture

```txt
Frontend
    ↓
REST API
    ↓
Express Backend
    ↓
MongoDB Atlas
```

---

# 🔄 Application Flow

```txt
Recruiter sends message
        ↓
Frontend sends API request
        ↓
Backend checks keywords
        ↓
MongoDB stores interaction
        ↓
Backend sends reply
        ↓
Frontend displays response
```

---

# 📡 API Structure

## Base Route

```txt
/api/chat
```

---

## Request Example

```json
{
  "message": "Tell me about your skills"
}
```

---

## Response Example

```json
{
  "reply": "I work with JavaScript, Node.js, Express.js and MongoDB."
}
```

---

# 💾 MongoDB Chat Schema

The chatbot stores:

* recruiter messages
* bot replies
* timestamps

Example:

```js
{
  userMessage: String,
  botReply: String,
  createdAt: Date
}
```

---

# 🧩 Keyword Matching System

The chatbot currently uses a simple keyword matching system.

Example:

```js
if(message.includes("skills")) {
   reply = "I work with JavaScript, Node.js..."
}
```

This makes the chatbot lightweight and easy to scale later.

---

# ❌ Fallback Response

If chatbot cannot understand the message:

```txt
Sorry, I couldn't understand that.

Please contact me directly:
📧 your-email@gmail.com
📞 your-number
```

---

# 🐞 Problem Faced During Development

## MongoDB Connection Error

### Error

```txt
querySrv ENOTFOUND
```

---

# 🔍 Root Cause

The MongoDB password itself contained:

```txt
@
```

This special character broke the MongoDB URI parsing.

Incorrect format:

```txt
username:password@2626@cluster.mongodb.net
```

The URL contained multiple `@` symbols.

---

# ✅ Solution

The special character `@` must be encoded.

```txt
@ → %40
```

Correct format:

```txt
password%402626
```

After encoding the password properly, MongoDB connected successfully.

---

# 📱 Responsive Design

The chatbot is designed to work on:

* Mobile
* Tablet
* Desktop

---

# 🚀 Deployment

## Frontend Deployment

* Vercel

## Backend Deployment

* Railway / Render

## Database

* MongoDB Atlas

---

# 🔮 Future Improvements

Planned future upgrades:

* OpenAI integration
* Real AI chatbot
* Recruiter tracking
* Authentication
* Real-time notifications

---

# 📚 What I Learned

Through this project I learned:

* Full-stack architecture
* REST APIs
* MongoDB integration
* Backend folder structure
* Environment variables
* Debugging real-world errors
* Frontend/backend communication
* Deployment flow

---

# 🎯 Final Note

This project is not just a chatbot.

It is a practical full-stack learning project built to:

* improve development skills
* understand scalable architecture
* solve real-world problems
* create an interactive recruiter experience

---
