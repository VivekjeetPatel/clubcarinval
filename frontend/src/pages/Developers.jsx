import { useEffect, useState } from "react";
import { getDevelopers } from "../api";
import Header from "../components/Header";
import useSwipeNavigation from "../hooks/useSwipeNavigation";

const PATH_ORDER = ["/", "/notifications", "/games", "/about", "/developers"];

export default function Developers() {
    useSwipeNavigation(PATH_ORDER);
    const [devs, setDevs] = useState([]);


    useEffect(() => {
        getDevelopers().then(res => setDevs(res.data));
    }, []);

    return (
        <div className="container" style={{ touchAction: 'pan-y' }}>

            <Header title="Devs" icon="users" />


            {devs.map((dev, i) => (
                <div key={i} className="card dev-card" style={{ textAlign: 'center' }}>
                    <div className="avatar" style={{ fontSize: '3rem', marginBottom: '10px' }}>👾</div>
                    <h2>{dev.name}</h2>
                    <p style={{ color: 'var(--accent1)' }}>{dev.role}</p>

                    <div className="links" style={{ marginTop: '15px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
                        {dev.contact && (
                            <a href={dev.contact} target="_blank" rel="noreferrer" className="btn small-btn">
                                GitHub
                            </a>
                        )}
                        {dev.social && (
                            <a href={dev.social} target="_blank" rel="noreferrer" className="btn small-btn" style={{ background: '#E1306C', borderColor: '#C13584' }}>
                                Social
                            </a>
                        )}
                        {dev.connect && (
                            <a href={dev.connect} target="_blank" rel="noreferrer" className="btn small-btn" style={{ background: '#0077b5', borderColor: '#005582' }}>
                                Connect
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
