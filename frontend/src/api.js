import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const getLeaderboard = () => axios.get(`${BASE_URL}/leaderboard`);

export const getNotifications = () => axios.get(`${BASE_URL}/notifications`);
export const getGames = () => axios.get(`${BASE_URL}/games`);
export const getAbout = () => axios.get(`${BASE_URL}/about`);
export const getDevelopers = () => axios.get(`${BASE_URL}/developers`);

// Admin Actions
export const updateLeaderboard = (data, secret) => axios.post(`${BASE_URL}/admin/leaderboard`, { data, secret });
export const updateNotifications = (data, secret) => axios.post(`${BASE_URL}/admin/notifications`, { data, secret });
export const updateGames = (data, secret) => axios.post(`${BASE_URL}/admin/games`, { data, secret });
export const updateAbout = (data, secret) => axios.post(`${BASE_URL}/admin/about`, { data, secret });
