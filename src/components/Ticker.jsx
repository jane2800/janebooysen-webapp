import styles from "./Ticker.module.css";
import cvData from "../data/cv";

export default function Ticker() {
    // Items are doubled so one run is always wider than the screen, then the run is
    // rendered twice so the loop is seamless. Only the first run is read by screen readers.
    const items = [...cvData.ticker, ...cvData.ticker];
    const run = (hidden) => (
        <ul className={styles.run} aria-hidden={hidden || undefined}>
            {items.map((item, i) => (
                <li key={i} className={styles.item} aria-hidden={i >= cvData.ticker.length || undefined}>
                    {item}
                    <span className={styles.star} aria-hidden="true">
                        ✦
                    </span>
                </li>
            ))}
        </ul>
    );

    return (
        <div className={styles.band} role="region" aria-label="Things I love">
            <div className={styles.track}>
                {run(false)}
                {run(true)}
            </div>
        </div>
    );
}
