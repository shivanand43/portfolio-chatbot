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
<!-- --------#Git & GitHub Project Setup

• Initialized a local Git repository to start version control for the project.

• Created a .gitignore file to exclude node_modules and environment files from source control.

• Verified project status using Git commands before tracking files.

• Added all project files to Git staging using git add.

• Created the first project snapshot using Git commit.

• Created a dedicated GitHub repository for the Portfolio Chatbot project.

• Connected the local repository with the remote GitHub repository.

• Pushed the complete frontend and backend source code to GitHub.

• Verified repository structure and ensured all project files were successfully uploaded.

Outcome:
The project source code is now securely version-controlled and accessible from GitHub for collaboration, deployment, and future maintenance.
---
Backend Production Preparation
Once the chatbot functionality was working successfully in the local environment, the backend application was reviewed and prepared for deployment to a production environment.

The Express server configuration was verified to ensure it could accept requests from external frontend applications. CORS middleware was enabled to allow communication between the deployed frontend and backend services. JSON request parsing was configured so the API could correctly process recruiter messages sent from the chatbot interface.

MongoDB Atlas was integrated as the cloud database solution, allowing recruiter interactions, chatbot replies, session information, and activity logs to be stored outside the local machine. Environment variables were used to securely manage database credentials and configuration values without exposing sensitive information in the source code.

The application startup process was also updated for production deployment. A dedicated start script was added to package.json because cloud hosting platforms such as Railway require a production entry point to launch the server automatically. Development-only tools such as nodemon were separated from production dependencies to reduce unnecessary packages in the deployment environment.

Why these changes were necessary:

• Localhost configurations do not work in production environments.

• Cloud platforms require a dedicated application startup process.

• Sensitive credentials must remain protected through environment variables.

• Database connectivity must be reliable and accessible from deployed services.

• Frontend and backend applications need secure cross-origin communication.

Outcome:

The backend application is now structured according to production deployment standards and is ready to be hosted on a cloud platform while maintaining secure database connectivity and API communication. -->


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
# Backend Deployment on Render

## Step 1 — Push Project to GitHub

Before deployment, push the latest frontend and backend code to GitHub.

Commands:

git add .

git commit -m "deployment ready"

git push origin main

Outcome:

* Source code is available online.
* Render can access the repository.

---

## Step 2 — Create Render Account

1. Visit https://render.com
2. Sign in using GitHub.
3. Authorize Render to access repositories.

Outcome:

* Render can read project code directly from GitHub.

---

## Step 3 — Create New Web Service

1. Click New +.
2. Select Web Service.
3. Choose GitHub Repository.
4. Select portfolio-chatbot repository.

Outcome:

* Render creates a deployment service for the backend.

---

## Step 4 — Configure Render Settings

Fill the following values:

Name:
portfolio-chatbot

Environment:
Node

Branch:
main

Root Directory:
server

Build Command:
npm install

Start Command:
npm start

Outcome:

* Render knows where the backend code exists.
* Render knows how to build and start the application.

---

## Step 5 — Configure Environment Variables

Add the following variables:

MONGO_URI=your_mongodb_connection_string

PORT=10000

Outcome:

* Backend can connect to MongoDB Atlas.
* Render can start the Express server.

---

## Step 6 — Deploy Application

Click:

Deploy Web Service

Render automatically:

* Clones repository
* Installs dependencies
* Builds application
* Starts server

Outcome:

* Backend becomes available through a public URL.

Example:

https://portfolio-chatbot.onrender.com

---

## Step 7 — Verify Deployment

Open:

https://your-render-url.onrender.com

Expected Response:

Portfolio Chatbot Backend Running

Outcome:

* Server is successfully deployed.

---

## Step 8 — Verify API Route

Open:

https://your-render-url.onrender.com/api/chat

Expected Response:

Cannot GET /api/chat

This is normal.

Reason:

* Browser sends GET request.
* Backend route accepts POST request.

Outcome:

* API endpoint exists and is reachable.

---

## Step 9 — Check Deployment Logs

Open:

Render Dashboard
→ Service
→ Logs

Verify:

Server running on port 10000

MongoDB Connected

Outcome:

* Express server is running.
* MongoDB Atlas connection is successful.

---

## Step 10 — Connect Frontend with Live Backend

Update chatApi.js

Replace:

http://localhost:5000/api/chat

With:

https://your-render-url.onrender.com/api/chat

Outcome:

* Frontend communicates with deployed backend.
* Recruiter messages are processed through Render.

---

## Common Issues Faced During Deployment

### MongoDB Connection Failed

Error:

MongooseServerSelectionError

Reason:

IP Address not whitelisted in MongoDB Atlas.

Solution:

Network Access
→ Add IP Address

Use:

0.0.0.0/0

Outcome:

MongoDB becomes accessible from Render.

---

### Application Exited Early

Reason:

Missing start script.

Solution:

package.json

"scripts": {
"start": "node server.js"
}

Outcome:

Render can start the application correctly.

---

### Cannot GET /

Reason:

Root route not created.

Solution:

app.get("/", (req, res) => {
res.send("Portfolio Chatbot Backend Running");
});

Outcome:

Deployment verification becomes easier.

---

## Final Result

Successfully deployed:

* Frontend Chatbot UI
* Express Backend API
* MongoDB Atlas Database
* Render Cloud Hosting

The chatbot is now publicly accessible and ready for recruiter interaction.
---
---
# Frontend Deployment on Vercel

## Step 1 — Push Latest Frontend Code

Before deployment, push the latest project changes to GitHub.

Commands:

git add .

git commit -m "frontend ready for deployment"

git push origin main

Outcome:

* Latest frontend code becomes available on GitHub.

---

## Step 2 — Create Vercel Project

1. Login to Vercel using GitHub.
2. Click New Project.
3. Select portfolio-chatbot repository.

Outcome:

* Vercel connects directly with the GitHub repository.

---

## Step 3 — Configure Project

Application Preset:

Other

Root Directory:

client

Outcome:

* Vercel deploys only the frontend files.

---

## Step 4 — Deploy Application

Click Deploy.

Vercel automatically:

* Pulls source code from GitHub.
* Builds the frontend.
* Generates a public URL.

Outcome:

* Frontend becomes accessible from anywhere.

---

## Step 5 — Verify Deployment

Open the generated Vercel URL.

Test chatbot using:

* Skills
* Projects
* Experience
* Contact

Outcome:

* Frontend successfully communicates with the deployed backend API.

---

## Final Result

Successfully deployed:

* Frontend → Vercel
* Backend → Render
* Database → MongoDB Atlas

The Portfolio Chatbot is now publicly accessible and can be used by recruiters, friends, and other users from any mobile, tablet, or desktop device through a single URL.
---
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
