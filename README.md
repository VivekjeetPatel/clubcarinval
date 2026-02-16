# 🎪 Club Carinval - Event Site

A pixel-art styled, mobile-first event website for Club Carinval. Built with a React frontend and a lightweight Node.js/Express backend powered by JSON files for easy content management.

![Pixel UI](https://img.shields.io/badge/Style-Pixel%20Art-purple)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Node.js%20%7C%20Vite-blue)

## ✨ Features

*   **🏆 Live Leaderboard**: Real-time sorted leaderboard for event participants.
*   **🌌 immersive Design**: Galaxy-themed background with animated starfields and neon accents.
*   **📱 Mobile-First**: Optimized navigation bar and responsive layouts for mobile devices.
*   **🔔 Notifications**: Update users on latest event news and schedules.
*   **🎮 Games Section**: Detailed rules, tips, and guides for event games.
*   **⚡ Fast & Lightweight**: No database required; data is served directly from JSON files.

## 🛠️ Tech Stack

*   **Frontend**: React, Vite, Vanilla CSS (Custom Pixel Theme)
*   **Backend**: Node.js, Express
*   **Data Source**: Local JSON files (CMS-free architecture)

## 🚀 Getting Started

### Prerequisites

*   Node.js installed on your machine.

### Installation & Running

1.  **Clone the repository** (if applicable) or navigate to the project folder.

2.  **Setup Backend**
    ```bash
    cd backend
    npm install
    node server.js
    ```
    *The backend will start on `http://localhost:5000`*

3.  **Setup Frontend** (in a new terminal)
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
    *The frontend will start on `http://localhost:5173`*

## 📂 Project Structure

```
clubcarinval/
├── backend/
│   ├── data/                 # JSON Data Files (Edit these to update content!)
│   │   ├── leaderboard.json
│   │   ├── notifications.json
│   │   ├── games.json
│   │   ├── about.json
│   │   └── developers.json
│   └── server.js             # API Server
│
└── frontend/
    ├── src/
    │   ├── components/       # Reusable UI components (Navbar, Loading, etc.)
    │   ├── pages/            # Main application pages
    │   ├── styles/           # Global styles
    │   ├── api.js            # API connection logic
    │   └── App.jsx           # Routing & Layout
```

## 📝 How to Update Content

You don't need to touch the code to update the site content! Just edit the JSON files in `backend/data/`:

*   **Leaderboard**: Add/Edit players in `leaderboard.json`
*   **Alerts**: Add new notifications in `notifications.json`
*   **Games**: Update rules or add games in `games.json`

Changes will reflect immediately after a page refresh (or after the backend restarts if the file system access is cached, though usually instant).

## 🔗 API Endpoints

*   `GET /leaderboard` - Returns sorted player list
*   `GET /notifications` - Returns list of alerts
*   `GET /games` - Returns details of all games
*   `GET /about` - Returns event description
*   `GET /developers` - Returns developer info

---
**Made with 💜 for Club Carinval**