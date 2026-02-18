import { useEffect, useState } from "react";
import { getGames } from "../api";
import "./Games.css";
import Loading from "../components/Loading";
import Header from "../components/Header";
import useSwipeNavigation from "../hooks/useSwipeNavigation";
import { useDrag } from "@use-gesture/react";
import PixelIcon from "../components/PixelIcon";

const PATH_ORDER = ["/", "/notifications", "/games", "/about", "/developers"];

export default function Games() {
    useSwipeNavigation(PATH_ORDER); // Global page navigation
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
        if (games.length > 0) setCurrentIndex((prev) => (prev + 1) % games.length);
    };

    const prevSlide = () => {
        if (games.length > 0) setCurrentIndex((prev) => (prev - 1 + games.length) % games.length);
    };

    // Swipe handler SPECIFICALLY for the game slider
    const bindGameSwipe = useDrag(({ swipe: [swipeX], tap, event }) => {
        // Stop propagation so we don't trigger the global page swipe (if using window listener)
        // However, useDrag attached to an element stops propagation by default in some config, 
        // but here we just want to ensure we catch the gesture.
        // We need to stop the event from bubbling up to the window listener IF it was a valid swipe.

        if (tap) return; // Ignore taps

        if (swipeX === -1) {
            nextSlide();
            event.stopPropagation();
        } else if (swipeX === 1) {
            prevSlide();
            event.stopPropagation();
        }
    }, {
        filterTaps: true,
        axis: 'x',
        pointer: { touch: true }
    });

    if (loading) return <div className="container"><Loading /></div>;
    if (games.length === 0) return <div className="container">No games data found.</div>;

    const game = games[currentIndex];

    return (
        <div className="game-slider-container" style={{ touchAction: 'pan-y' }}>
            <Header title="🎮 Games" />

            <div className="slider-wrapper">
                <button className="slider-btn prev" onClick={prevSlide}>&lt;</button>

                {/* Apply bindGameSwipe to the card */}
                <div className="game-slide card" {...bindGameSwipe()} style={{ touchAction: 'pan-y' }}>
                    <div className="game-icon">
                        {game.icon ? game.icon : <PixelIcon name="game" size={40} />}
                    </div>
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
                    <div style={{ textAlign: 'center', fontSize: '0.7rem', color: '#555', marginTop: '10px' }}>
                        (SWIPE CARD TO CHANGE GAME)
                    </div>
                </div>

                <button className="slider-btn next" onClick={nextSlide}>&gt;</button>
            </div>
        </div>
    );
}
