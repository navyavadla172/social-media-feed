# Social Media Feed

A simple and dynamic social media feed application built with React.js and Firebase. This app allows users to view posts, create new posts, and interact with a user-friendly interface.

## Features

- User Authentication
- View and create posts
- Responsive design
- Firebase integration for real-time data

## Tech Stack

- Frontend: React.js, React Router DOM
- Backend: Firebase
- Styling: CSS Modules

## Project Structure

```plaintext
src/
│
├── assets/
├── components/
│   ├── Auth.js
│   ├── Feed.js
│   ├── Navbar.js
│   ├── Post.js
│   ├── PostForm.js
│   ├── Profile.js
│
├── context/
│   └── UserContext.js
├── firebase/
│   └── firebase-config.js
├── pages/
│   ├── Home.js
│   ├── ProfilePage.js
├── services/
│   └── postService.js
├── styles/
│   └── index.css
└── app.js
