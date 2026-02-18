import { useNavigate } from "react-router-dom";
import { useDrag } from "@use-gesture/react";

export default function useSwipeNavigation(pathOrder) {
    const navigate = useNavigate();

    const bind = useDrag(({ movement: [mx], velocity: [vx], direction: [dx], cancel, last }) => {
        // Thresholds: move > 50px (smaller threshold for better response) OR velocity > 0.5
        if (last && (Math.abs(mx) > 50 || Math.abs(vx) > 0.5)) {
            const currentPath = window.location.pathname;
            const currentIndex = pathOrder.indexOf(currentPath);

            if (currentIndex === -1) return; // Not in swipeable list

            // Swipe Left (dx < 0, mx < 0) -> Next Page (e.g. Leaderboard -> Notifications)
            if (mx < 0 && currentIndex < pathOrder.length - 1) {
                navigate(pathOrder[currentIndex + 1]);
            }
            // Swipe Right (dx > 0, mx > 0) -> Previous Page (e.g. Notifications -> Leaderboard)
            else if (mx > 0 && currentIndex > 0) {
                navigate(pathOrder[currentIndex - 1]);
            }
        }
    });

    return bind;
}
