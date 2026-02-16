const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Helper to read data safely
const readData = (file) => {
    try {
        const filePath = path.join(__dirname, 'data', file);
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading ${file}:`, error);
        return { error: "Failed to load data" };
    }
};

app.get("/leaderboard", (req, res) => {
  res.json(readData("leaderboard.json"));
});

app.get("/notifications", (req, res) => {
  res.json(readData("notifications.json"));
});

app.get("/games", (req, res) => {
  res.json(readData("games.json"));
});

app.get("/about", (req, res) => {
  res.json(readData("about.json"));
});

app.get("/developers", (req, res) => {
  res.json(readData("developers.json"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
