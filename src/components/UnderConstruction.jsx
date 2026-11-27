import { useEffect, useState } from "react";
import styles from "./UnderConstruction.module.css";
import ScrambleText from "./ScrambleText";
import cvData from "../data/cv";

// Full-page holding sign. Switch it on or off in src/App.js (UNDER_CONSTRUCTION).

// Midnight on 29 November in Berlin (CET, UTC+1).
const RELAUNCH = new Date("2026-11-29T00:00:00+01:00");

const pad = (n) => String(n).padStart(2, "0");

function timeLeft() {
    const ms = Math.max(0, RELAUNCH - Date.now());
    const s = Math.floor(ms / 1000);
    return {
        done: ms === 0,
        parts: [
            { label: "days", value: Math.floor(s / 86400) },
            { label: "hrs", value: Math.floor((s % 86400) / 3600) },
            { label: "min", value: Math.floor((s % 3600) / 60) },
            { label: "sec", value: s % 60 },
        ],
    };
}

export default function UnderConstruction() {
    const [left, setLeft] = useState(timeLeft);

    useEffect(() => {
        const id = setInterval(() => setLeft(timeLeft()), 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <main className={styles.page}>
            <div className={styles.hanger}>
                <div className={styles.strings} aria-hidden="true">
                    <span />
                    <span />
                </div>

                <section className={styles.sign} aria-labelledby="uc-title">
                    <p className={styles.sticker}>
                        <span aria-hidden="true">● </span>Open to work
                    </p>
                    <div className={styles.stripes} aria-hidden="true" />
                    <div className={styles.body}>
                        <p className="eyebrow">Jané Booysen · Portfolio</p>
                        <h1 id="uc-title" className={styles.title}>
                            <ScrambleText text="Under construction" onMount splitWords wordClassName={styles.word} />
                        </h1>
                        <p className={styles.text}>
                            Come back on <strong>Sunday, 29 November</strong> for the relaunch.
                        </p>

                        {left.done ? (
                            <p className={styles.soon}>Relaunching any moment now ✦</p>
                        ) : (
                            <ol className={styles.countdown} aria-hidden="true">
                                {left.parts.map((p) => (
                                    <li key={p.label}>
                                        <span className={styles.num}>{pad(p.value)}</span>
                                        <span className={styles.unit}>{p.label}</span>
                                    </li>
                                ))}
                            </ol>
                        )}

                        <div className={`btn-row ${styles.links}`}>
                            <a className="btn btn--sm btn--outline" href={cvData.links.linkedin}>
                                LinkedIn
                            </a>
                            <a className="btn btn--sm btn--outline" href={cvData.links.cv}>
                                CV (PDF)
                            </a>
                        </div>
                    </div>
                    <div className={styles.stripes} aria-hidden="true" />
                </section>
            </div>
        </main>
    );
}
