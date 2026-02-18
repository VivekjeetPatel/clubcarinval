import { useRef, useEffect } from "react";
import "./Background.css";

// Helper to generate random box-shadow stars
const generateStars = (n) => {
    let value = `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
    for (let i = 2; i <= n; i++) {
        value += `, ${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
    }
    return value;
};

export default function Background() {
    // UseRefs to avoid recalculating on every render
    const smallStars = useRef(generateStars(700));
    const mediumStars = useRef(generateStars(200));
    const largeStars = useRef(generateStars(100));

    return (
        <div className="space-background">
            <div className="stars-layer layer-1" style={{ boxShadow: smallStars.current }}></div>
            <div className="stars-layer layer-2" style={{ boxShadow: mediumStars.current }}></div>
            <div className="stars-layer layer-3" style={{ boxShadow: largeStars.current }}></div>

            {/* Floating Space Objects (Planets/Galaxies) */}
            <div className="space-object planet-1">🪐</div>
            <div className="space-object galaxy-1">🌌</div>
            <div className="space-object planet-2">🌍</div>

            {/* The Spaceship */}
            <div className="spaceship-container">
                <div className="pixel-spaceship">🚀</div>
            </div>
        </div>
    );
}
