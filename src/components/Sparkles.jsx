import { useEffect, useState } from "react";
import styles from "./Sparkles.module.css";

function Sparkles() {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const count = 25;

        const initialParticles = Array.from({ length: count }, () => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.3 + 0.05,
            delay: Math.random() * 800 + 200,
            duration: 800,
        }));

        setParticles(initialParticles);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setParticles(prev =>
            prev.map(p => ({
                ...p,
                offsetX: Math.random() * 200 - 100,
                offsetY: Math.random() * 200 - 100
            }))
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);


  return (
    <div className={styles.sparkleContainer}>
      {particles.map((p, i) => (
        <div
          key={i}
          className={styles.particle}
          style={{
            "--left": `${p.left}%`,
            "--top": `${p.top}%`,
            "--size": `${p.size}px`,
            "--blur": `${p.size * 2}px`,
            "--spread": `${p.size * 0.5}px`,
            "--opacity": p.opacity,
            "--duration": `${p.duration}ms`,
            "--delay": `${p.delay}ms`,
            transform: `translate(${p.offsetX || 0}px, ${p.offsetY || 0}px)`
            }}
        />
      ))}
    </div>
  );
}

export default Sparkles;
