import { useEffect, useState } from "react";
import { getLeaderboard } from "../api";
import Loading from "../components/Loading";

export default function Leaderboard() {
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

    return (
        <div className="container" style={{ paddingBottom: '80px' }}>
            <h1>🏆 Leaderboard</h1>
            {loading ? (
                <Loading />
            ) : (
                <div className="leaderboard-list">
                    {data.map((p, i) => (
                        <div key={i} className={`card ${i < 3 ? 'top-rank' : ''}`}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="rank">#{i + 1} {i === 0 ? '👑' : ''}</span>
                                <span className="name">{p.name}</span>
                                <span className="points">{p.points} PTS</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
