import { useEffect, useState } from "react";
import { getAbout } from "../api";
import Loading from "../components/Loading";


export default function About() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getAbout().then(res => setData(res.data));
    }, []);

    if (!data) return <div className="container"><Loading /></div>;


    return (
        <div className="container">
            <h1>ℹ️ About</h1>

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
        </div>
    );
}
