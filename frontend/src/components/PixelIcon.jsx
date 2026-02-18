export default function PixelIcon({ name, size = 24, color = "white", active = false }) {
    const finalColor = active ? "var(--accent3)" : color;

    // Simple SVG paths for pixel icons (16x16 grid scaled)
    const icons = {
        home: (
            <path d="M2 16V10H0L8 2L16 10H14V16H10V11H6V16H2Z" fill={finalColor} />
        ),
        trophy: (
            <path d="M2 2H14V4H12V6H14V8H12V10H10V11H6V10H4V8H2V6H4V4H2V2ZM6 2V4H10V2H6ZM6 12H10V14H6V12ZM4 14H12V16H4V14Z" fill={finalColor} />
        ),
        bell: (
            <path d="M6 2H10V4H12V10H14V12H2V10H4V4H6V2ZM6 14H10V16H6V14Z" fill={finalColor} />
        ),
        game: (
            <path d="M0 6V12H2V14H6V16H10V14H14V12H16V6H14V4H2V6H0ZM4 8H6V10H4V8ZM10 8H12V10H10V8Z" fill={finalColor} />
        ),
        info: (
            <path d="M6 2H10V4H6V2ZM6 6H10V12H6V6ZM6 14H10V16H6V14Z" fill={finalColor} />
        ),
        users: (
            <path d="M2 14V8H6V6H10V8H14V14H2ZM6 2H10V6H6V2Z" fill={finalColor} /> // Simplistic user icon
        )
    };

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ imageRendering: 'pixelated' }}
        >
            {icons[name] || icons.home}
        </svg>
    );
}
