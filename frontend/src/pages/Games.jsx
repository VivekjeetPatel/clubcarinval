import { useEffect, useState } from "react";
import { getGames } from "../api";

export default function Games() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getGames().then(res => setGames(res.data));
    }, []);

    return (
        <div className="container">
            <h1>🎮 Games</h1>
            {games.map((game, i) => (
                <div key={i} className="card game-card">
                    <h2 style={{ borderBottom: '2px solid var(--accent1)', paddingBottom: '5px' }}>{game.name}</h2>

                    <div className="section">
                        <h4 style={{ color: 'var(--accent2)' }}>RULES:</h4>
                        <ul>
                            {game.rules.map((r, j) => <li key={j}>{r}</li>)}
                        </ul>
                    </div>

                    <div className="section">
                        <h4 style={{ color: 'var(--accent2)' }}>HOW TO PLAY:</h4>
                        <ul>
                            {game.howToPlay.map((h, k) => <li key={k}>{h}</li>)}
                        </ul>
                    </div>

                    <div className="section">
                        <h4 style={{ color: 'gold' }}>TIPS:</h4>
                        <ul>
                            {game.tips.map((t, l) => <li key={l}>{t}</li>)}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
