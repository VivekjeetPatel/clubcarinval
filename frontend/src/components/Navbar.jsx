import { Link, useLocation } from "react-router-dom";
import PixelIcon from "./PixelIcon";
import "./Navbar.css";

export default function Navbar() {
    const { pathname } = useLocation();

    return (
        <nav className="navbar">
            <Link to="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                <div className="icon-wrapper">
                    <PixelIcon name="trophy" size={20} color={pathname === '/' ? "yellow" : "white"} />
                </div>
                <span className="nav-label">RANK</span>
            </Link>

            <Link to="/notifications" className={`nav-item ${pathname === '/notifications' ? 'active' : ''}`}>
                <div className="icon-wrapper">
                    <PixelIcon name="bell" size={20} color={pathname === '/notifications' ? "#ff003c" : "white"} />
                </div>
                <span className="nav-label">ALERT</span>
            </Link>

            <Link to="/games" className={`nav-item ${pathname === '/games' ? 'active' : ''}`}>
                <div className="icon-wrapper">
                    <PixelIcon name="game" size={20} color={pathname === '/games' ? "#00f0ff" : "white"} />
                </div>
                <span className="nav-label">GAME</span>
            </Link>

            <Link to="/about" className={`nav-item ${pathname === '/about' ? 'active' : ''}`}>
                <div className="icon-wrapper">
                    <PixelIcon name="info" size={20} color={pathname === '/about' ? "#00ff00" : "white"} />
                </div>
                <span className="nav-label">INFO</span>
            </Link>

            <Link to="/developers" className={`nav-item ${pathname === '/developers' ? 'active' : ''}`}>
                <div className="icon-wrapper">
                    <PixelIcon name="users" size={20} color={pathname === '/developers' ? "#bd00ff" : "white"} />
                </div>
                <span className="nav-label">DEVS</span>
            </Link>
        </nav>
    );
}
