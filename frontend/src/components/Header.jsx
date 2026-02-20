import { useEffect, useState } from "react";
import { getAbout } from "../api";
import "./Header.css";
import PixelIcon from "./PixelIcon";

export default function Header({ title, icon }) {
    const [logos, setLogos] = useState({ left: "", right: "" });

    useEffect(() => {
        getAbout().then(res => {
            setLogos({
                left: res.data.leftLogo,
                right: res.data.rightLogo
            });
        }).catch(err => console.error("Failed to load header logos", err));
    }, []);

    return (
        <div className="app-header">
            <a href="https://aarunya.harshitvarshney.in/" target="_blank" rel="noopener noreferrer" className="logo-container" style={{ textDecoration: 'none' }}>
                <img
                    src={logos.left || "https://placehold.co/50x50/000/FFF?text=L"}
                    alt="Left Logo"
                    className="logo-img"
                />
            </a>

            <h1 className="header-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                {icon && <PixelIcon name={icon} size={20} color="var(--accent3)" />}
                {title}
            </h1>

            <a href="https://funtechxmits.netlify.app/" target="_blank" rel="noopener noreferrer" className="logo-container" style={{ textDecoration: 'none' }}>
                <img
                    src={logos.right || "https://placehold.co/50x50/000/FFF?text=R"}
                    alt="Right Logo"
                    className="logo-img"
                />
            </a>
        </div>
    );
}
