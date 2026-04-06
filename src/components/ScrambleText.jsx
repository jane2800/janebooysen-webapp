import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

export default function ScrambleText({ text, delay = 0, onMount = false }) {
    const [displayed, setDisplayed] = useState(text);
    const frameRef = useRef(null);

    function scramble() {
        cancelAnimationFrame(frameRef.current);
        const resolved = new Array(text.length).fill(false);
        const startTime = performance.now() + delay;
        const duration = 1400;

        function animate() {
            const elapsed = performance.now() - startTime;

            if (elapsed < 0) {
                frameRef.current = requestAnimationFrame(animate);
                return;
            }

            const progress = Math.min(elapsed / duration, 1);
            const resolveUpTo = Math.floor(progress * text.length);

            for (let i = 0; i < resolveUpTo; i++) resolved[i] = true;

            setDisplayed(
                text.split("").map((char, i) => {
                    if (char === " ") return " ";
                    if (resolved[i]) return char;
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                }).join("")
            );

            if (progress < 1) {
                frameRef.current = requestAnimationFrame(animate);
            } else {
                setDisplayed(text);
            }
        }

        frameRef.current = requestAnimationFrame(animate);
    }

    useEffect(() => {
        if (onMount) scramble();
        return () => cancelAnimationFrame(frameRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <span onMouseEnter={scramble}>
            {displayed}
        </span>
    );
}
