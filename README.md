# 🌟 Seraphim – College Social Club Website

## 📌 Project Overview

**Seraphim** is the official web project developed for our **college social club**, aimed at providing an online presence for the club and managing user interactions digitally. The website showcases the club’s vision, activities, gallery, future plans, and allows users to connect with the club through interactive features.

This project was built as a **team project**, following a **client–server architecture**, where the frontend and backend run independently and communicate via REST APIs.

---

## 🏗️ Tech Stack

### 🔹 Frontend

* HTML5
* CSS3
* JavaScript
* Responsive UI design

### 🔹 Backend (Hybrid Approach)

This project was developed using **two backend technologies** by different team members:

* **Node.js + Express.js** (used by part of the team)
* **Spring Boot (Java)** (used by part of the team)

Both backends followed REST API architecture.

### 🔹 Database

* **MongoDB** (used with Node.js backend)
* **Mongoose** for schema & database interaction

---

## 📂 Project Structure

```
SERAPHIM-MAIN
│
├── Backend
│   ├── models
│   │   └── user.js
│   ├── node_modules
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── WDA-Project-main
│   ├── CSS
│   ├── images
│   ├── src
│   ├── index.html
│   ├── about.html
│   ├── contactUs.html
│   ├── donate.html
│   ├── gallery.html
│   ├── futurePlans.html
│   └── partners.html
│
├── Frontend
└── README.md
```

---

## ⚙️ How to Run the Project

### 🔸 Backend Setup

1. Open terminal in VS Code
2. Navigate to backend folder:

```bash
cd Backend
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node server.js
```

(or using nodemon)

```bash
npx nodemon server.js
```

Backend will run on:

```
http://localhost:8080
```

---

### 🔸 Frontend Setup

1. Open frontend folder
2. Open `index.html` in browser

(Frontend and backend run on different ports and communicate via APIs.)

---

## 🔄 Project Flow (Working)

1. User interacts with the frontend UI
2. Frontend sends HTTP requests to backend APIs
3. Backend processes request using Express
4. Data is stored/retrieved from MongoDB
5. Backend sends response back to frontend

---

## 👥 Team Contribution

* Project developed as a **team project**
* Different team members worked on different backend technologies
* **Node.js + MongoDB backend** was implemented by the team lead
* **Spring Boot backend** was implemented by other team members
* Team Lead handled overall integration, backend coordination, and project flow

---

## 🎯 Key Features

* Informative pages about the social club
* Clean and responsive UI
* Backend APIs for data handling
* MongoDB database integration
* Scalable and maintainable architecture

---

## 📚 Learning Outcomes

* Practical understanding of **Node.js & MongoDB**
* Experience with **client–server architecture**
* Team collaboration & project management
* Real-world project development workflow

---



## 🏫 About Seraphim

Seraphim is the official **social club of our college**, focused on social initiatives, student engagement, and community development. This project was built to digitally represent the club and its activities.

---

### ⭐ Developed with teamwork and dedication
