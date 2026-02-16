import { Link } from "react-router-dom";
import "./Navbar.css"; // We'll create this or use inline/global

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-item">🏆</Link>
            <Link to="/notifications" className="nav-item">🔔</Link>
            <Link to="/games" className="nav-item">🎮</Link>
            <Link to="/about" className="nav-item">ℹ️</Link>
            <Link to="/developers" className="nav-item">👨‍💻</Link>
        </nav>
    );
}
