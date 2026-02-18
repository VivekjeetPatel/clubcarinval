import { useEffect, useState } from "react";
import { getAbout } from "../api";
import Loading from "../components/Loading";
import Header from "../components/Header";
import useSwipeNavigation from "../hooks/useSwipeNavigation";

const PATH_ORDER = ["/", "/notifications", "/games", "/about", "/developers"];

export default function About() {
    useSwipeNavigation(PATH_ORDER);
    const [data, setData] = useState(null);


    useEffect(() => {
        getAbout().then(res => setData(res.data));
    }, []);

    if (!data) return <div className="container"><Loading /></div>;

    return (
        <div className="container">
            <Header title="ℹ️ About" />

            <div className="card">
                <h3 style={{ color: 'var(--accent1)' }}>EVENT:</h3>
                <p>{data.event}</p>
            </div>

            <div className="card">
                <h3 style={{ color: 'var(--accent2)' }}>CLUB:</h3>
                <p>{data.club}</p>
            </div>

            <div className="card">
                <h3 style={{ color: 'white' }}>FEST:</h3>
                <p>{data.fest}</p>
            </div>

            {data.instagram && (
                <div className="card social-section" style={{ textAlign: 'center', marginTop: '20px' }}>
                    <h3 style={{ color: '#E1306C' }}>FOLLOW US:</h3>
                    <a href={data.instagram} target="_blank" rel="noreferrer" className="btn" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', border: 'none', color: 'white' }}>
                        📸 Instagram
                    </a>
                </div>
            )}
        </div>
    );
}
