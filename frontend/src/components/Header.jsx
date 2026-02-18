import { useEffect, useState } from "react";
import { getAbout } from "../api";
import "./Header.css";

export default function Header({ title }) {
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
            <div className="logo-container">
                <img
                    src={logos.left || "https://placehold.co/50x50/000/FFF?text=L"}
                    alt="Left Logo"
                    className="logo-img"
                />
            </div>

            <h1 className="header-title">{title}</h1>

            <div className="logo-container">
                <img
                    src={logos.right || "https://placehold.co/50x50/000/FFF?text=R"}
                    alt="Right Logo"
                    className="logo-img"
                />
            </div>
        </div>
    );
}
