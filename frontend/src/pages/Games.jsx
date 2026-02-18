import { useEffect, useState } from "react";
import { getGames } from "../api";
import "./Games.css"; // Create this usage
import Loading from "../components/Loading";
import Header from "../components/Header";
import useSwipeNavigation from "../hooks/useSwipeNavigation";

const PATH_ORDER = ["/", "/notifications", "/games", "/about", "/developers"];

export default function Games() {
    useSwipeNavigation(PATH_ORDER);
    const [games, setGames] = useState([]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getGames().then(res => {
            setGames(res.data);
            setLoading(false);
        });
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % games.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + games.length) % games.length);
    };

    if (loading) return <div className="container"><Loading /></div>;
    if (games.length === 0) return <div className="container">No games data found.</div>;

    const game = games[currentIndex];

    return (
        <div className="game-slider-container">
            <Header title="🎮 Games" />


            <div className="slider-wrapper">
                <button className="slider-btn prev" onClick={prevSlide}>&lt;</button>

                <div className="game-slide card">
                    <div className="game-icon">{game.icon || "🎮"}</div>
                    <h2 className="game-title">{game.name}</h2>

                    <div className="game-content">
                        <div className="section">
                            <h4 className="section-title retro-yellow">INSTRUCTIONS:</h4>
                            <ul className="pixel-list">
                                {game.howToPlay && game.howToPlay.map((h, k) => <li key={k}>{h}</li>)}
                            </ul>
                        </div>

                        <div className="section">
                            <h4 className="section-title retro-blue">RULES:</h4>
                            <ul className="pixel-list">
                                {game.rules && game.rules.map((r, j) => <li key={j}>{r}</li>)}
                            </ul>
                        </div>

                        {game.tips && game.tips.length > 0 && (
                            <div className="section">
                                <h4 className="section-title retro-pink">TIPS:</h4>
                                <ul className="pixel-list">
                                    {game.tips.map((t, l) => <li key={l}>{t}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="slide-counter">
                        {currentIndex + 1} / {games.length}
                    </div>
                </div>

                <button className="slider-btn next" onClick={nextSlide}>&gt;</button>
            </div>
        </div>
    );
}
