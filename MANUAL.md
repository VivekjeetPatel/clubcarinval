# 📘 Club Carinval - User & Admin Manual

Welcome to the **Club Carinval** event platform! This manual will guide you through using the website, whether you are a participant checking scores or an administrator managing the event.

---

## 👤 User Guide

As a participant or visitor, you can access all public pages to stay updated with the event.

### 1. 🏆 Leaderboard (Home)
*   **What it is**: The main landing page showing the current standings of all participants.
*   **How to use**:
    *   The list is automatically sorted by points (highest to lowest).
    *   The top 3 players get a special rank style.
    *   If the data is loading, you will see a pixelated processing bar.

### 2. 🔔 Notifications
*   **What it is**: A notice board for important announcements (e.g., "Lunch Break," "Game delay").
*   **How to use**:
    *   Click the **Bell Icon** (🔔) in the bottom navigation bar.
    *   Newest alerts appear at the top with their date.

### 3. 🎮 Games
*   **What it is**: A catalog of all games, rules, and tips.
*   **How to use**:
    *   Click the **Controller Icon** (🎮) in the navigation bar.
    *   **Navigation**: Use the **`<`** and **`>`** buttons to slide between different games.
    *   **Content**: Each game card shows:
        *   **Icon**: Pixel art symbol.
        *   **Instructions**: How to play.
        *   **Rules**: Important do's and don'ts.
        *   **Tips**: Strategies to win.

### 4. ℹ️ About
*   **What it is**: Information about the Event, the Club, and the Fest.
*   **How to use**:
    *   Click the **Info Icon** (ℹ️) in the navigation bar.
    *   Read details about the event's background and organization.

### 5. 👨‍💻 Developers
*   **What it is**: Credits to the team behind the site.
*   **How to use**:
    *   Click the **Laptop Icon** (👨‍💻) in the navigation bar.
    *   Click "GitHub" or "Connect" buttons to view developer profiles.

---

## ⚙️ Admin Guide

As an administrator, you have full control over the website's content **in real-time**.

### 🔐 Accessing the Admin Panel
1.  Go to the website URL and append `/admin` to the end.
    *   *Example*: `http://localhost:5173/admin` OR `https://your-site.com/admin`
2.  **Login**: Enter the Secret Key.
    *   **Default Key**: `clubcarinval2026`
    *   Click **Unlock**.

### 🛠️ Managing Content

Once logged in, use the tabs at the top to switch between sections.

#### 1. 🏆 Ranking (Leaderboard)
*   **Add Player**:
    *   Enter **Name** and **Points** in the top row.
    *   Click the **`+`** button.
*   **Edit Player**:
    *   Click directly on any **Name** or **Score** in the list to edit it.
*   **Remove Player**:
    *   Click the red **`x`** button next to a player.
*   **Save**:
    *   **CRITICAL**: Click **"💾 Save Changes"** at the bottom to apply updates to the live site.

#### 2. 🔔 Alerts (Notifications)
*   **Add Alert**:
    *   Enter **Title** and select a **Date**.
    *   Click **`+`**.
*   **Edit Alert**:
    *   Modify the text or date directly in the list.
*   **Save**: Click **"💾 Save Changes"**.

#### 3. 🎮 Games Catalog
*   **Add Game**: Click **"+ Add New Game"**. A new blank card will appear at the bottom.
*   **Edit Game**:
    *   **Icon**: Paste an emoji (e.g., 🎯, 🎲).
    *   **Name**: Type the game name.
    *   **Details**: Enter Instructions, Rules, and Tips in the text boxes.
    *   *Note*: Put **each item on a new line**. The website will automatically turn them into bullet points.
*   **Remove Game**: Click **"Remove"** inside the game card.
*   **Save**: Click **"💾 Save Games"**.

#### 4. ℹ️ About Details
*   **Edit**: Update the text for Event, Club, or Fest descriptions.
*   **Save**: Click **"💾 Save Details"**.

---

## ⚠️ Important Admin Notes
*   **Save Frequently**: Changes are only live after you click the **Save** button in each section.
*   **Live Updates**: Users might need to refresh their page to see the latest changes immediately, though often it's instant.
*   **Security**: Do not share the Secret Key with participants!
