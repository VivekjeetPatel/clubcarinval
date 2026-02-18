import { useEffect, useRef } from "react";

const PIXEL_SIZE = 4; // Size of each particle
const TRAIL_LENGTH = 20; // Max particles in trail
const FADE_SPEED = 0.05; // Opacity decrease per frame
const COLORS = ["#ff003c", "#00f0ff", "#fcee0a", "#ffffff"]; // Retro palette

export default function PixelTrail() {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const isDragging = useRef(false);
    const lastPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        // Resize handling
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", resize);
        resize();

        // Loop
        let animationFrameId;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Remove dead particles
            particles.current = particles.current.filter(p => p.opacity > 0);

            // Draw particles
            particles.current.forEach(p => {
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.opacity;
                ctx.fillRect(p.x, p.y, PIXEL_SIZE, PIXEL_SIZE);
                p.opacity -= FADE_SPEED;
                p.x += (Math.random() - 0.5) * 2; // Slight jitter
                p.y += (Math.random() - 0.5) * 2;
            });

            animationFrameId = requestAnimationFrame(render);
        };
        render();

        // Input Handlers
        const startObj = (x, y) => {
            isDragging.current = true;
            lastPos.current = { x, y };
        };

        const moveObj = (x, y) => {
            if (!isDragging.current) return;

            // Interpolate between last pos and current pos to avoid gaps
            const dist = Math.hypot(x - lastPos.current.x, y - lastPos.current.y);
            const steps = Math.ceil(dist / (PIXEL_SIZE / 2));

            for (let i = 0; i < steps; i++) {
                const t = i / steps;
                const px = lastPos.current.x + (x - lastPos.current.x) * t;
                const py = lastPos.current.y + (y - lastPos.current.y) * t;

                particles.current.push({
                    x: px,
                    y: py,
                    color: COLORS[Math.floor(Math.random() * COLORS.length)],
                    opacity: 1.0
                });
            }

            lastPos.current = { x, y };
        };

        const endObj = () => {
            isDragging.current = false;
        };

        // Touch Events
        const handleTouchStart = (e) => startObj(e.touches[0].clientX, e.touches[0].clientY);
        const handleTouchMove = (e) => moveObj(e.touches[0].clientX, e.touches[0].clientY);

        // Mouse Events
        const handleMouseDown = (e) => startObj(e.clientX, e.clientY);
        const handleMouseMove = (e) => moveObj(e.clientX, e.clientY);

        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", endObj);

        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", endObj);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", endObj);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", endObj);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                pointerEvents: "none", // Click-through
                zIndex: 9999 // On top of everything
            }}
        />
    );
}
