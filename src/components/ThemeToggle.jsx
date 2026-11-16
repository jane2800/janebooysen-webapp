import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

const THEMES = { wine: "Wine", noir: "Noir" };

function readTheme() {
    try {
        const saved = localStorage.getItem("theme");
        if (saved === "noir" || saved === "obsidian") return "noir";
    } catch (e) {}
    return "wine";
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState(readTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        try {
            localStorage.setItem("theme", theme);
        } catch (e) {}
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", theme === "noir" ? "#1a0a10" : "#3a121d");
    }, [theme]);

    const other = theme === "wine" ? "noir" : "wine";

    return (
        <button
            type="button"
            className={styles.toggle}
            onClick={() => setTheme(other)}
            aria-label={`Switch to ${THEMES[other]} theme`}
        >
            <span className={styles.swatch} data-swatch={other} aria-hidden="true" />
            <span className={styles.label}>{THEMES[other]}</span>
        </button>
    );
}
