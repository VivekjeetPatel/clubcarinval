export default function PixelIcon({ name, size = 24, color = "white", active = false }) {
    const finalColor = active ? "var(--accent3)" : color;

    const icons = {
        home: <path d="M2 16V10H0L8 2L16 10H14V16H10V11H6V16H2Z" fill={finalColor} />,
        trophy: <path d="M2 2H14V4H12V6H14V8H12V10H10V11H6V10H4V8H2V6H4V4H2V2ZM6 2V4H10V2H6ZM6 12H10V14H6V12ZM4 14H12V16H4V14Z" fill={finalColor} />,
        bell: <path d="M6 2H10V4H12V10H14V12H2V10H4V4H6V2ZM6 14H10V16H6V14Z" fill={finalColor} />,
        game: <path d="M0 6V12H2V14H6V16H10V14H14V12H16V6H14V4H2V6H0ZM4 8H6V10H4V8ZM10 8H12V10H10V8Z" fill={finalColor} />,
        info: <path d="M6 2H10V4H6V2ZM6 6H10V12H6V6ZM6 14H10V16H6V14Z" fill={finalColor} />,
        users: <path d="M2 14V8H6V6H10V8H14V14H2ZM6 2H10V6H6V2Z" fill={finalColor} />,

        // New Icons
        crown: <path d="M2 14V16H14V14H12V10H10V14H6V10H4V14H2ZM2 6V12H4V8H6V12H10V8H12V12H14V6H12V4H10V6H6V4H4V6H2Z" fill={finalColor} />,
        medal_gold: <path d="M6 0H10V2H12V4H10V6H12V8H14V14H12V16H4V14H2V8H4V6H2V4H4V2H6V0ZM6 8H10V10H6V8Z" fill="#ffd700" />,
        medal_silver: <path d="M6 0H10V2H12V4H10V6H12V8H14V14H12V16H4V14H2V8H4V6H2V4H4V2H6V0ZM6 8H10V10H6V8Z" fill="#c0c0c0" />,
        medal_bronze: <path d="M6 0H10V2H12V4H10V6H12V8H14V14H12V16H4V14H2V8H4V6H2V4H4V2H6V0ZM6 8H10V10H6V8Z" fill="#cd7f32" />,

        instagram: <path d="M4 0H12V2H14V4H16V12H14V14H12V16H4V14H2V12H0V4H2V2H4V0ZM4 2V4H2V12H4V14H12V12H14V4H12V2H4ZM12 4H10V6H12V4ZM8 6H10V8H12V10H10V12H6V10H4V8H6V6H8Z" fill={finalColor} />,

        star: <path d="M8 0H10V6H16V8H10V14H8V8H2V6H8V0Z" fill={finalColor} />,
        moon: <path d="M6 2H10V4H12V6H14V10H12V12H10V14H6V12H4V10H2V6H4V4H6V2ZM8 6V10H10V6H8Z" fill={finalColor} />,
        invader: <path d="M2 0H8V2H10V8H8V6H6V8H8V10H2V8H4V6H2V8H0V2H2V0ZM2 2V4H4V2H2ZM6 2V4H8V2H6Z" fill={finalColor} />,
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
