import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
        const [currentTheme, setTheme] = useState(() => {
            const savedTheme = localStorage.getItem("theme");
            return savedTheme || "crimson";
    });

    useEffect(() => {  
        document.documentElement.setAttribute("data-theme", currentTheme);
        localStorage.setItem("theme", currentTheme);
    }, [currentTheme]);

    const toggle = () => {
        setTheme((prev) => (prev === "crimson" ? "obsidian" : "crimson"));
    };

    return (
        <button className={styles.toggle} onClick={toggle}>
            <span className={styles.indicator} />
            {currentTheme === "crimson" ? "OBSIDIAN" : "CRIMSON"}
        </button>
    );
}
