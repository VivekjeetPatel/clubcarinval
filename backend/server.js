const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json()); // Enable JSON body parsing

// Helper to read data safely
const readData = (file) => {
  try {
    const filePath = path.join(__dirname, 'data', file);
    if (!fs.existsSync(filePath)) return []; // Return empty array if file doesn't exist
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${file}:`, error);
    return { error: "Failed to load data" };
  }
};

// Helper to write data safely
const writeData = (file, content) => {
  try {
    const filePath = path.join(__dirname, 'data', file);
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), "utf-8");
    return { success: true };
  } catch (error) {
    console.error(`Error writing to ${file}:`, error);
    return { success: false, error: "Failed to save data" };
  }
};

// --- GET Routes ---
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

// --- ADMIN POST Routes (Protected by simple secret) ---
const ADMIN_SECRET = "clubcarinval2026"; // Simple secret for hackathon/MVP

const authenticate = (req, res, next) => {
  const { secret } = req.body;
  if (secret !== ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized: Invalid Secret" });
  }
  next();
};

app.post("/admin/leaderboard", authenticate, (req, res) => {
  const { data } = req.body;
  const result = writeData("leaderboard.json", data);
  res.json(result);
});

app.post("/admin/notifications", authenticate, (req, res) => {
  const { data } = req.body;
  const result = writeData("notifications.json", data);
  res.json(result);
});

app.post("/admin/games", authenticate, (req, res) => {
  const { data } = req.body;
  const result = writeData("games.json", data);
  res.json(result);
});

app.post("/admin/about", authenticate, (req, res) => {
  const { data } = req.body;
  const result = writeData("about.json", data);
  res.json(result);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
