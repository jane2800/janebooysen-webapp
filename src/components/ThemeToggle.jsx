import { useState } from "react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("crimson");

    const toggle = () => {
        const next = theme === "crimson" ? "obsidian" : "crimson";
        setTheme(next);
        document.documentElement.setAttribute("data-theme", next === "obsidian" ? "obsidian" : "");
        localStorage.setItem("theme", next);
    };

    return (
        <button className={styles.toggle} onClick={toggle}>
            <span className={styles.indicator} />
            {theme === "crimson" ? "OBSIDIAN" : "CRIMSON"}
        </button>
    );
}
