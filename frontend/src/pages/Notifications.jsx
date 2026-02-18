import { useEffect, useState } from "react";
import { getNotifications } from "../api";
import Header from "../components/Header";
import useSwipeNavigation from "../hooks/useSwipeNavigation";

const PATH_ORDER = ["/", "/notifications", "/games", "/about", "/developers"];

export default function Notifications() {
    useSwipeNavigation(PATH_ORDER);
    const [data, setData] = useState([]);


    useEffect(() => {
        getNotifications().then(res => setData(res.data));
    }, []);

    return (
        <div className="container" style={{ touchAction: 'pan-y' }}>
            <Header title="🔔 Alerts" />


            {data.map((n, i) => (
                <div key={i} className="card notification-card">
                    <div className="camp-title" style={{ color: 'var(--accent2)', marginBottom: '5px' }}>
                        IMPORTANT
                    </div>
                    <h3>{n.title}</h3>
                    <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>DATE: {n.date}</p>
                </div>
            ))}
        </div>
    );
}
