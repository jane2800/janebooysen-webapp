import styles from "./InProgressCard.module.css";
import Description from "./Description";

const ICONS = { done: "✓", now: "◐", next: "○" };
const STATUS_TEXT = { done: "Done", now: "In progress", next: "Up next" };

// "2026-09" → "SEP 2026"; anything else is shown as written.
function formatSince(since) {
    if (/^\d{4}-\d{2}$/.test(since)) {
        const [y, m] = since.split("-").map(Number);
        return new Date(y, m - 1).toLocaleString("en-GB", { month: "short", year: "numeric" });
    }
    return since;
}

export default function InProgressCard({ project }) {
    const { title, capability, since, description, tags = [], followUrl, steps = [] } = project;

    const total = steps.length;
    const done = steps.filter((s) => s.status === "done").length;
    const percent = total ? Math.round((done / total) * 100) : 0;

    return (
        <article className={`${styles.card} ${total ? "" : styles.noSteps} lift`}>
            <div className={styles.info}>
                <p className={styles.meta}>
                    <span className={styles.pill}>Building</span>
                    {since && <span className={styles.since}>since {formatSince(since)}</span>}
                </p>
                {capability && <p className={`eyebrow ${styles.capability}`}>{capability}</p>}
                <h4 className={styles.title}>{title}</h4>
                <Description text={description} className={styles.description} />
                {tags.length > 0 && (
                    <ul className="tag-list" aria-label="Skills and tools">
                        {tags.map((t, i) => (
                            <li key={`${t}-${i}`} className="tag">
                                {t}
                            </li>
                        ))}
                    </ul>
                )}
                {followUrl && (
                    <a className={`text-link ${styles.follow}`} href={followUrl}>
                        Follow along <span aria-hidden="true">&nbsp;→</span>
                        <span className="visually-hidden">: {title}</span>
                    </a>
                )}
            </div>

            {total > 0 && (
                <div className={styles.progress}>
                    <div className={styles.progressHead}>
                        <span className="eyebrow">Progress</span>
                        <span className="eyebrow" aria-hidden="true">
                            {done} / {total} done
                        </span>
                    </div>
                    <div
                        className={styles.bar}
                        role="progressbar"
                        aria-label={`${title} progress`}
                        aria-valuemin={0}
                        aria-valuemax={total}
                        aria-valuenow={done}
                        aria-valuetext={`${done} of ${total} steps done`}
                    >
                        <span className={styles.fill} style={{ width: `${percent}%` }} />
                    </div>
                    <ul className={styles.steps}>
                        {steps.map((s, i) => (
                            <li key={i} className={`${styles.step} ${styles[s.status] || ""}`}>
                                <span className={styles.icon} aria-hidden="true">
                                    {ICONS[s.status] || ICONS.next}
                                </span>
                                <span className="visually-hidden">{STATUS_TEXT[s.status] || STATUS_TEXT.next}: </span>
                                {s.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </article>
    );
}
