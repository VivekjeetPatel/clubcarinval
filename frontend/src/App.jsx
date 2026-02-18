import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Leaderboard from "./pages/Leaderboard";
import Notifications from "./pages/Notifications";
import Games from "./pages/Games";
import About from "./pages/About";
import Developers from "./pages/Developers";
import Admin from "./pages/Admin";
import Background from "./components/Background";
import "./index.css"; // Ensure global styles are loaded


function App() {
    return (
        <BrowserRouter>
            <Background />


            <Routes>
                <Route path="/" element={<Leaderboard />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/games" element={<Games />} />
                <Route path="/about" element={<About />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <Navbar />
        </BrowserRouter>
    );
}

export default App;
