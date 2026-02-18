import { useEffect, useState } from "react";
import { getDevelopers } from "../api";
import Header from "../components/Header";

export default function Developers() {
    const [devs, setDevs] = useState([]);

    useEffect(() => {
        getDevelopers().then(res => setDevs(res.data));
    }, []);

    return (
        <div className="container">
            <Header title="👨‍💻 Devs" />

            {devs.map((dev, i) => (
                <div key={i} className="card dev-card" style={{ textAlign: 'center' }}>
                    <div className="avatar" style={{ fontSize: '3rem', marginBottom: '10px' }}>👾</div>
                    <h2>{dev.name}</h2>
                    <p style={{ color: 'var(--accent1)' }}>{dev.role}</p>

                    <div className="links" style={{ marginTop: '15px' }}>
                        {dev.contact && (
                            <a href={dev.contact} target="_blank" rel="noreferrer" className="btn" style={{ marginRight: '10px' }}>
                                GitHub
                            </a>
                        )}
                        {dev.connect && (
                            <a href={dev.connect} target="_blank" rel="noreferrer" className="btn">
                                Connect
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
