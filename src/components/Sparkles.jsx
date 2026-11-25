import { useMemo } from "react";
import styles from "./Sparkles.module.css";

/** Subtle starfield behind the whole page. Each sparkle fades in and out,
 *  and while it is invisible it jumps to a new random spot, so the field
 *  slowly reshuffles. With prefers-reduced-motion the CSS animation is off,
 *  so no iteration events fire and the sparkles stay put. */
function randomSpot() {
    return { left: Math.random() * 100, top: Math.random() * 100 };
}

function moveWhileHidden(e) {
    // fires at the end of each cycle, when the sparkle is at opacity 0
    const { left, top } = randomSpot();
    e.currentTarget.style.setProperty("--left", `${left}%`);
    e.currentTarget.style.setProperty("--top", `${top}%`);
}

function Sparkles({ count = 60 }) {
    const particles = useMemo(
        () =>
            Array.from({ length: count }, () => {
                const duration = Math.random() * 4 + 4;
                return {
                    ...randomSpot(),
                    size: Math.random() * 2 + 1.2,
                    opacity: Math.random() * 0.35 + 0.65,
                    duration,
                    // negative delay so sparkles start part-way through, not all at once
                    delay: -Math.random() * duration,
                };
            }),
        [count]
    );

    return (
        <div className={styles.sparkleContainer} aria-hidden="true">
            {particles.map((p, i) => (
                <span
                    key={i}
                    className={styles.particle}
                    onAnimationIteration={moveWhileHidden}
                    style={{
                        "--left": `${p.left}%`,
                        "--top": `${p.top}%`,
                        "--size": `${p.size}px`,
                        "--opacity": p.opacity,
                        "--duration": `${p.duration}s`,
                        "--delay": `${p.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}

export default Sparkles;
