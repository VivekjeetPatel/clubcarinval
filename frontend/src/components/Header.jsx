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
        <div className="page-header">
            <img src={logos.left || "https://placehold.co/50x50/000/FFF?text=L"} alt="Left Logo" className="header-logo left" />
            <h1 className="header-title">{title}</h1>
            <img src={logos.right || "https://placehold.co/50x50/000/FFF?text=R"} alt="Right Logo" className="header-logo right" />
        </div>
    );
}
