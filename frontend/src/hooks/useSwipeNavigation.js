import { useNavigate } from "react-router-dom";
import { useDrag } from "@use-gesture/react";

export default function useSwipeNavigation(pathOrder) {
    const navigate = useNavigate();

    // Attach listener to window so it works everywhere
    useDrag(
        ({ movement: [mx], velocity: [vx], last }) => {
            // Thresholds: move > 50px OR velocity > 0.5
            if (last && (Math.abs(mx) > 50 || Math.abs(vx) > 0.5)) {
                const currentPath = window.location.pathname;
                const currentIndex = pathOrder.indexOf(currentPath);

                if (currentIndex === -1) return; // Not in swipeable list

                // Swipe Left (mx < 0) -> Next Page
                if (mx < -50 && currentIndex < pathOrder.length - 1) {
                    navigate(pathOrder[currentIndex + 1]);
                }
                // Swipe Right (mx > 0) -> Previous Page
                else if (mx > 50 && currentIndex > 0) {
                    navigate(pathOrder[currentIndex - 1]);
                }
            }
        },
        {
            target: window, // v10+ uses target: window or reference
            eventOptions: { passive: false } // Required for some touch actions
        }
    );
}
