import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const getLeaderboard = () => axios.get(`${BASE_URL}/leaderboard`);
export const getNotifications = () => axios.get(`${BASE_URL}/notifications`);
export const getGames = () => axios.get(`${BASE_URL}/games`);
export const getAbout = () => axios.get(`${BASE_URL}/about`);
export const getDevelopers = () => axios.get(`${BASE_URL}/developers`);
