import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px',
            color: 'var(--accent2)'
        }}>
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 90, 180, 270, 0],
                }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--accent1)',
                    boxShadow: '4px 4px 0px var(--accent2)',
                    marginBottom: '20px'
                }}
            />
            <h3 style={{ fontSize: '0.8rem', animation: 'blink 1s infinite' }}>LOADING...</h3>
            <style>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
        </div>
    );
}
