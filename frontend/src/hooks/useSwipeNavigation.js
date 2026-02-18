import { useNavigate } from "react-router-dom";
import { useDrag } from "@use-gesture/react";

export default function useSwipeNavigation(pathOrder) {
    const navigate = useNavigate();

    const bind = useDrag(({ movement: [mx], velocity: [vx], direction: [dx], cancel, last }) => {
        // Thresholds: move > 100px OR velocity > 0.5
        if (last && (Math.abs(mx) > 100 || Math.abs(vx) > 0.5)) {
            const currentPath = window.location.pathname;
            const currentIndex = pathOrder.indexOf(currentPath);

            if (currentIndex === -1) return; // Not in swipeable list

            // Swipe Left (dx < 0) -> Next Page
            if (dx < 0 && currentIndex < pathOrder.length - 1) {
                navigate(pathOrder[currentIndex + 1]);
            }
            // Swipe Right (dx > 0) -> Previous Page
            else if (dx > 0 && currentIndex > 0) {
                navigate(pathOrder[currentIndex - 1]);
            }
        }
    });

    return bind;
}
