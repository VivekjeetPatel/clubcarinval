import { useEffect, useState } from "react";
import { getAbout } from "../api";
import Loading from "../components/Loading";
import Header from "../components/Header";
import useSwipeNavigation from "../hooks/useSwipeNavigation";
import PixelIcon from "../components/PixelIcon";

const PATH_ORDER = ["/", "/notifications", "/games", "/about", "/developers"];

export default function About() {
    useSwipeNavigation(PATH_ORDER);
    const [data, setData] = useState(null);

    useEffect(() => {
        getAbout().then(res => setData(res.data));
    }, []);

    if (!data) return <div className="container"><Loading /></div>;

    return (
        <div className="container" style={{ touchAction: 'pan-y' }}>
            <Header title="About" icon="info" />


            <div className="card">
                <h3 style={{ color: 'var(--accent1)', textAlign: 'center' }}>EVENT</h3>
                <p>{data.event}</p>
            </div>

            <div className="card">
                <h3 style={{ color: 'var(--accent2)', textAlign: 'center' }}>CLUB</h3>
                <p>{data.club}</p>
            </div>

            <div className="card">
                <h3 style={{ color: 'white', textAlign: 'center' }}>FEST</h3>
                <p>{data.fest}</p>
            </div>

            {data.instagram && (
                <div className="card social-section" style={{ textAlign: 'center', marginTop: '20px' }}>
                    <h3 style={{ color: '#E1306C', marginBottom: '15px' }}>FOLLOW US</h3>
                    <a href={data.instagram} target="_blank" rel="noreferrer" className="btn" style={{
                        background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                        border: 'none',
                        color: 'white',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <PixelIcon name="instagram" size={24} color="white" />
                        INSTAGRAM
                    </a>
                </div>
            )}
        </div>
    );
}
