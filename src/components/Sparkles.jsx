import { useMemo } from "react";
import styles from "./Sparkles.module.css";

/** Subtle twinkling starfield behind the whole page. Twinkle is CSS-only
 *  and switched off for prefers-reduced-motion. */
function Sparkles({ count = 60 }) {
    const particles = useMemo(
        () =>
            Array.from({ length: count }, () => ({
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: Math.random() * 2 + 1.2,
                opacity: Math.random() * 0.35 + 0.65,
                delay: Math.random() * 6,
                duration: Math.random() * 3 + 2.5,
            })),
        [count]
    );

    return (
        <div className={styles.sparkleContainer} aria-hidden="true">
            {particles.map((p, i) => (
                <span
                    key={i}
                    className={styles.particle}
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
