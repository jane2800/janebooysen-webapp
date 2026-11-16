import { useEffect, useRef, useState } from "react";
import styles from "./Nav.module.css";

const LINKS = [
    { href: "#work", label: "Work" },
    { href: "#cv", label: "CV" },
    { href: "#contact", label: "Say hi" },
];

export default function Nav() {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        const onClick = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
        document.addEventListener("keydown", onKey);
        document.addEventListener("click", onClick);
        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("click", onClick);
        };
    }, [open]);

    return (
        <nav className={styles.nav} aria-label="Main" ref={ref}>
            <button
                type="button"
                className={styles.menuButton}
                aria-expanded={open}
                aria-controls="main-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((o) => !o)}
            >
                <span className={styles.bars} aria-hidden="true" />
            </button>
            <ul id="main-menu" className={`${styles.list} ${open ? styles.open : ""}`}>
                {LINKS.map((l) => (
                    <li key={l.href}>
                        <a href={l.href} className={styles.link} onClick={() => setOpen(false)}>
                            {l.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
