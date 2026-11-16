import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../hooks/useReducedMotion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

/**
 * Scrambles text into random characters and resolves it left to right.
 * Runs on mount (onMount) and on hover. Skipped for prefers-reduced-motion.
 * Screen readers always get the real text.
 * splitWords renders each word in its own span (for one word per line).
 */
export default function ScrambleText({ text, delay = 0, onMount = false, splitWords = false, wordClassName }) {
    const [displayed, setDisplayed] = useState(text);
    const frameRef = useRef(null);

    function scramble() {
        if (prefersReducedMotion()) return;
        cancelAnimationFrame(frameRef.current);
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

            setDisplayed(
                text
                    .split("")
                    .map((char, i) => {
                        if (char === " " || i < resolveUpTo) return char;
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
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
            <span className="visually-hidden">{text}</span>
            <span aria-hidden="true">
                {splitWords
                    ? displayed.split(" ").map((word, i) => (
                          <span key={i} className={wordClassName}>
                              {word}
                          </span>
                      ))
                    : displayed}
            </span>
        </span>
    );
}
