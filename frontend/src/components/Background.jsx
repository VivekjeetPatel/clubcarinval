import { motion } from "framer-motion";
import PixelIcon from "./PixelIcon";

export default function Background() {
    const shapes = [
        { name: "star", color: "#ffffff", size: 10, x: "10%", y: "20%", delay: 0 },
        { name: "star", color: "#ffff00", size: 8, x: "80%", y: "10%", delay: 2 },
        { name: "star", color: "#00f0ff", size: 12, x: "70%", y: "80%", delay: 1 },
        { name: "invader", color: "#ff003c", size: 24, x: "90%", y: "50%", delay: 0 },
        { name: "moon", color: "#fcee0a", size: 32, x: "5%", y: "85%", delay: 3 },
        { name: "game", color: "#bd00ff", size: 20, x: "20%", y: "40%", delay: 4 },
        { name: "invader", color: "#00ff00", size: 16, x: "50%", y: "50%", delay: 1.5 },
    ];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden',
            pointerEvents: 'none',
        }}>
            {/* Deep Space Gradient */}
            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
                opacity: 0.8
            }} />

            {shapes.map((s, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0.3, y: 0 }}
                    animate={{
                        opacity: [0.3, 0.8, 0.3],
                        y: [0, -20, 0],
                        x: [0, 5, 0]
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        delay: s.delay,
                        ease: "easeInOut"
                    }}
                    style={{
                        position: 'absolute',
                        left: s.x,
                        top: s.y,
                    }}
                >
                    <PixelIcon name={s.name} size={s.size} color={s.color} />
                </motion.div>
            ))}
        </div>
    );
}
