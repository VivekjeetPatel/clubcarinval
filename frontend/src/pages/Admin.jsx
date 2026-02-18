import { useState, useEffect } from "react";
import {
    getLeaderboard, getNotifications, getGames, getAbout,
    updateLeaderboard, updateNotifications, updateGames, updateAbout
} from "../api";
import "./Admin.css";
import Header from "../components/Header";


export default function Admin() {
    const [secret, setSecret] = useState("");
    const [isLogged, setIsLogged] = useState(false);
    const [activeTab, setActiveTab] = useState("leaderboard");

    // Data States
    const [leaderboard, setLeaderboard] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [games, setGames] = useState([]);
    const [about, setAbout] = useState({ event: "", club: "", fest: "", leftLogo: "", rightLogo: "", instagram: "" });


    const [status, setStatus] = useState("");

    useEffect(() => {
        if (isLogged) {
            fetchData();
        }
    }, [isLogged]);

    const fetchData = async () => {
        const lb = await getLeaderboard();
        const notif = await getNotifications();
        const g = await getGames();
        const a = await getAbout();

        setLeaderboard(lb.data);
        setNotifications(notif.data);
        setGames(g.data);
        setAbout(a.data);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (secret === "clubcarinval2026") {
            setIsLogged(true);
        } else {
            alert("Wrong Secret!");
        }
    };

    const showStatus = (msg, success = true) => {
        setStatus(msg);
        setTimeout(() => setStatus(""), 3000);
    };

    // --- Leaderboard --
    const initialPlayer = { name: "", points: 0 };
    const [newPlayer, setNewPlayer] = useState(initialPlayer);
    const addPlayer = () => { setLeaderboard([...leaderboard, newPlayer]); setNewPlayer(initialPlayer); };
    const removePlayer = (i) => setLeaderboard(leaderboard.filter((_, idx) => idx !== i));
    const updatePlayer = (i, f, v) => {
        const u = [...leaderboard]; u[i] = { ...u[i], [f]: v }; setLeaderboard(u);
    };
    const saveLeaderboard = async () => {
        try { await updateLeaderboard(leaderboard, secret); showStatus("Leaderboard Saved! ✅"); }
        catch { showStatus("Error Saving! ❌", false); }
    };

    // --- Notifications --
    const initialNotif = { title: "", date: "" };
    const [newNotif, setNewNotif] = useState(initialNotif);
    const addNotif = () => { setNotifications([newNotif, ...notifications]); setNewNotif(initialNotif); };
    const removeNotif = (i) => setNotifications(notifications.filter((_, idx) => idx !== i));
    const updateNotif = (i, f, v) => {
        const u = [...notifications]; u[i] = { ...u[i], [f]: v }; setNotifications(u);
    };
    const saveNotifications = async () => {
        try { await updateNotifications(notifications, secret); showStatus("Notifications Saved! ✅"); }
        catch { showStatus("Error Saving! ❌", false); }
    };

    // --- About ---
    const saveAbout = async () => {
        try { await updateAbout(about, secret); showStatus("About Saved! ✅"); }
        catch { showStatus("Error Saving! ❌", false); }
    };

    // --- Games ---
    const initialGame = { name: "New Game", icon: "🎮", rules: [], howToPlay: [], tips: [] };
    const addGame = () => setGames([...games, initialGame]);
    const removeGame = (i) => setGames(games.filter((_, idx) => idx !== i));
    const updateGameField = (i, f, v) => {
        const u = [...games]; u[i] = { ...u[i], [f]: v }; setGames(u);
    };
    // Helper to edit arrays as text (newline separated)
    const updateGameArray = (i, field, text) => {
        const arr = text.split('\n').filter(line => line.trim() !== "");
        updateGameField(i, field, arr);
    };
    const saveGames = async () => {
        try { await updateGames(games, secret); showStatus("Games Saved! ✅"); }
        catch { showStatus("Error Saving! ❌", false); }
    };


    if (!isLogged) {
        return (
            <div className="container admin-login">
                <h1>🔒 Admin Panel</h1>
                <form onSubmit={handleLogin}>
                    <input type="password" placeholder="Key" value={secret} onChange={(e) => setSecret(e.target.value)} className="pixel-input" />
                    <button type="submit" className="btn">Unlock</button>
                </form>
            </div>
        );
    }

    return (
        <div className="container" style={{ maxWidth: '800px' }}>
            <Header title="⚙️ Admin Control" />


            <div className="admin-tabs">
                {['leaderboard', 'notifications', 'games', 'about'].map(tab => (
                    <button key={tab} className={`btn ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
                        {tab.toUpperCase()}
                    </button>
                ))}
            </div>

            {status && <div className="status-msg">{status}</div>}

            {/* LEADERBOARD */}
            {activeTab === 'leaderboard' && (
                <div className="editor-section">
                    <h2>🏆 Standings</h2>
                    <div className="add-row">
                        <input placeholder="Name" value={newPlayer.name} onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })} className="pixel-input" />
                        <input type="number" placeholder="Pts" value={newPlayer.points} onChange={(e) => setNewPlayer({ ...newPlayer, points: parseInt(e.target.value) })} className="pixel-input sm" />
                        <button onClick={addPlayer} className="btn small-btn">+</button>
                    </div>
                    <div className="list-view">
                        {leaderboard.map((p, i) => (
                            <div key={i} className="list-item">
                                <span className="rank-idx">{i + 1}.</span>
                                <input value={p.name} onChange={(e) => updatePlayer(i, 'name', e.target.value)} className="pixel-input edit-input" />
                                <input type="number" value={p.points} onChange={(e) => updatePlayer(i, 'points', parseInt(e.target.value))} className="pixel-input sm edit-input" />
                                <button onClick={() => removePlayer(i)} className="del-btn">x</button>
                            </div>
                        ))}
                    </div>
                    <button onClick={saveLeaderboard} className="btn save-btn">💾 Save Changes</button>
                </div>
            )}

            {/* NOTIFICATIONS */}
            {activeTab === 'notifications' && (
                <div className="editor-section">
                    <h2>🔔 Alerts</h2>
                    <div className="add-row">
                        <input placeholder="Title" value={newNotif.title} onChange={(e) => setNewNotif({ ...newNotif, title: e.target.value })} className="pixel-input pop" />
                        <input type="date" value={newNotif.date} onChange={(e) => setNewNotif({ ...newNotif, date: e.target.value })} className="pixel-input sm" />
                        <button onClick={addNotif} className="btn small-btn">+</button>
                    </div>
                    <div className="list-view">
                        {notifications.map((n, i) => (
                            <div key={i} className="list-item">
                                <input value={n.title} onChange={(e) => updateNotif(i, 'title', e.target.value)} className="pixel-input pop edit-input" />
                                <input type="date" value={n.date} onChange={(e) => updateNotif(i, 'date', e.target.value)} className="pixel-input sm edit-input" />
                                <button onClick={() => removeNotif(i)} className="del-btn">x</button>
                            </div>
                        ))}
                    </div>
                    <button onClick={saveNotifications} className="btn save-btn">💾 Save Changes</button>
                </div>
            )}

            {/* GAMES */}
            {activeTab === 'games' && (
                <div className="editor-section">
                    <h2>🎮 Games Catalog</h2>
                    <button onClick={addGame} className="btn" style={{ marginBottom: '15px' }}>+ Add New Game</button>

                    <div className="games-list-editor">
                        {games.map((g, i) => (
                            <div key={i} className="game-editor-card">
                                <div className="game-header">
                                    <input value={g.icon} onChange={(e) => updateGameField(i, 'icon', e.target.value)} className="pixel-input xs" placeholder="Icon" />
                                    <input value={g.name} onChange={(e) => updateGameField(i, 'name', e.target.value)} className="pixel-input" placeholder="Game Name" style={{ fontWeight: 'bold' }} />
                                    <button onClick={() => removeGame(i)} className="del-btn">Remove</button>
                                </div>

                                <div className="game-details-edit">
                                    <label>📜 Instructions (one per line):</label>
                                    <textarea
                                        className="pixel-textarea"
                                        value={g.howToPlay ? g.howToPlay.join('\n') : ''}
                                        onChange={(e) => updateGameArray(i, 'howToPlay', e.target.value)}
                                        rows={3}
                                    />

                                    <label>⚔️ Rules (one per line):</label>
                                    <textarea
                                        className="pixel-textarea"
                                        value={g.rules ? g.rules.join('\n') : ''}
                                        onChange={(e) => updateGameArray(i, 'rules', e.target.value)}
                                        rows={3}
                                    />

                                    <label>💡 Tips (one per line):</label>
                                    <textarea
                                        className="pixel-textarea"
                                        value={g.tips ? g.tips.join('\n') : ''}
                                        onChange={(e) => updateGameArray(i, 'tips', e.target.value)}
                                        rows={2}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={saveGames} className="btn save-btn">💾 Save Games</button>
                </div>
            )}

            {/* ABOUT */}
            {activeTab === 'about' && (
                <div className="editor-section">
                    <h2>ℹ️ About Details</h2>

                    <div className="about-editor">
                        <label>🎉 Event Description:</label>
                        <textarea
                            className="pixel-textarea"
                            value={about.event}
                            onChange={(e) => setAbout({ ...about, event: e.target.value })}
                            rows={4}
                        />

                        <label>🏫 Club Description:</label>
                        <textarea
                            className="pixel-textarea"
                            value={about.club}
                            onChange={(e) => setAbout({ ...about, club: e.target.value })}
                            rows={4}
                        />

                        <textarea
                            className="pixel-textarea"
                            value={about.fest}
                            onChange={(e) => setAbout({ ...about, fest: e.target.value })}
                            rows={4}
                        />

                        <div className="logos-edit-section" style={{ marginTop: '20px', borderTop: '1px dashed gray', paddingTop: '10px' }}>
                            <h3>🎨 Design & Social</h3>

                            <label>Left Logo URL:</label>
                            <input
                                className="pixel-input"
                                value={about.leftLogo || ""}
                                onChange={(e) => setAbout({ ...about, leftLogo: e.target.value })}
                                style={{ width: '100%', marginBottom: '10px' }}
                            />

                            <label>Right Logo URL:</label>
                            <input
                                className="pixel-input"
                                value={about.rightLogo || ""}
                                onChange={(e) => setAbout({ ...about, rightLogo: e.target.value })}
                                style={{ width: '100%', marginBottom: '10px' }}
                            />

                            <label>📸 Instagram URL:</label>
                            <input
                                className="pixel-input pop"
                                value={about.instagram || ""}
                                onChange={(e) => setAbout({ ...about, instagram: e.target.value })}
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>

                    <button onClick={saveAbout} className="btn save-btn">💾 Save Details</button>
                </div>
            )}

        </div>
    );
}
