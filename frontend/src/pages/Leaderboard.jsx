import { useEffect, useState } from "react";
import { getLeaderboard } from "../api";
import Loading from "../components/Loading";
import Header from "../components/Header";
import useSwipeNavigation from "../hooks/useSwipeNavigation";
import "./Leaderboard.css";

const PATH_ORDER = ["/", "/notifications", "/games", "/about", "/developers"];

export default function Leaderboard() {
    useSwipeNavigation(PATH_ORDER);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getLeaderboard()
            .then(res => {
                // Sort by points descending
                const sorted = res.data.sort((a, b) => b.points - a.points);
                setData(sorted);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const top3 = data.slice(0, 3);
    const rest = data.slice(3);

    return (
        <div className="container leaderboard-container" style={{ paddingBottom: '80px', touchAction: 'pan-y' }}>

            <Header title="🏆 Leaderboard" />

            {loading ? (
                <Loading />
            ) : (
                <>
                    {/* PODIUM SECTION */}
                    {top3.length > 0 && (
                        <div className="podium">
                            {/* 2nd Place */}
                            {top3[1] && (
                                <div className="podium-place second">
                                    <div className="avatar">🥈</div>
                                    <div className="player-name">{top3[1].name}</div>
                                    <div className="score">{top3[1].points} pts</div>
                                    <div className="podium-block">2</div>
                                </div>
                            )}

                            {/* 1st Place */}
                            {top3[0] && (
                                <div className="podium-place first">
                                    <div className="avatar">👑</div>
                                    <div className="player-name">{top3[0].name}</div>
                                    <div className="score">{top3[0].points} pts</div>
                                    <div className="podium-block">1</div>
                                </div>
                            )}

                            {/* 3rd Place */}
                            {top3[2] && (
                                <div className="podium-place third">
                                    <div className="avatar">🥉</div>
                                    <div className="player-name">{top3[2].name}</div>
                                    <div className="score">{top3[2].points} pts</div>
                                    <div className="podium-block">3</div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* REST OF THE LIST */}
                    <div className="leaderboard-list">
                        {rest.map((p, i) => (
                            <div key={i + 3} className="rank-card">
                                <div className="rank-idx">{i + 4}</div>
                                <div className="player-info">
                                    <span className="list-name">{p.name}</span>
                                </div>
                                <div className="list-score">{p.points} PTS</div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
