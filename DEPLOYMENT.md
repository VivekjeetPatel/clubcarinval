# 🚀 Deployment Guide for Club Carinval

Since your app uses a **Node.js backend** that writes to **local JSON files**, and a **React frontend**, the best free/easy way to deploy this is using **Render**.

> **⚠️ CRITICAL WARNING**: Standard cloud hosting (Vercel, Netlify, Render Free Tier) has "ephemeral filesystems". This means **changes made to JSON files via your Admin Panel will vanish** when the server restarts or redeploys.
>
> **For a Hackathon/Demo:** This is fine (data resets are okay).
> **For Real Use:** You would typically need a database (MongoDB/PostgreSQL).
>
> *I will show you the method for valid "Demo" deployment.*

---

## 🏗️ Step 1: Prep the Code for Deployment

We need to make sure the Frontend connects to the *live* backend, not `localhost`.

### 1. Update Frontend API URL
In `frontend/src/api.js`, change the logical base URL to use an environment variable.

```javascript
// frontend/src/api.js
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
// ... rest of code
```

### 2. Update Backend for Production
Ensure `backend/server.js` serves the frontend files in production (Hybrid Deployment) OR rely on CORS for separate deployments.
*For simplicity, we will deploy them as two separate services on Render.*

---

## ☁️ Step 2: Deploy Backend to Render

1.  Push your latest code to GitHub (**Done!**).
2.  Go to [Render.com](https://render.com) and Sign Up/Login.
3.  Click **"New + "** -> **"Web Service"**.
4.  Connect your GitHub repo `VivekjeetPatel/clubcarinval`.
5.  **Configure Backend**:
    *   **Name**: `clubcarinval-backend`
    *   **Root Directory**: `backend`  <-- Important!
    *   **Runtime**: `Node`
    *   **Build Command**: `npm install`
    *   **Start Command**: `node server.js`
    *   **Region**: Singapore (or closest to you)
    *   **Free Tier**: Yes
6.  Click **"Create Web Service"**.
7.  **Wait**: Render will deploy. Once done, copy the URL (e.g., `https://clubcarinval-backend.onrender.com`).

---

## 🌐 Step 3: Deploy Frontend to Render (Static Site)

1.  On Render Dashboard, click **"New + "** -> **"Static Site"**.
2.  Connect the SAME GitHub repo (`VivekjeetPatel/clubcarinval`).
3.  **Configure Frontend**:
    *   **Name**: `clubcarinval-frontend`
    *   **Root Directory**: `frontend` <-- Important!
    *   **Build Command**: `npm install && npm run build`
    *   **Publish Directory**: `dist`
    *   **Environment Variables** (Advanced Settings):
        *   Key: `VITE_API_URL`
        *   Value: `https://clubcarinval-backend.onrender.com` (Your backend URL from Step 2)
4.  Click **"Create Static Site"**.

---

## ✅ Step 4: Final Test

1.  Open your **Frontend URL** (e.g., `https://clubcarinval-frontend.onrender.com`).
2.  Check if data loads from the backend.
3.  Go to `/admin`, log in, and try updating the leaderboard.
    *   *Note: Updates might disappear after about 15 minutes of inactivity on the free tier due to server sleep/reset.*

---

## 🔄 Alternative: Vercel (Frontend Only)

If you prefer Vercel for the frontend:
1.  Install Vercel CLI or go to Vercel Dashboard.
2.  Import Repo.
3.  **Root Directory**: `frontend`
4.  **Environment Variables**: `VITE_API_URL` = Your Render Backend URL.
5.  Deploy!
