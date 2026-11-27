import styles from "./ProjectRow.module.css";
import Description from "./Description";
import phone from "./iphone.module.css";
import browser from "./computer.module.css";

function Visual({ visual }) {
    if (visual.type === "phone") {
        return (
            <div className={`${styles.panel} ${styles.panelDark}`}>
                <div className={phone.device}>
                    <img className={phone.screen} src={visual.src} alt={visual.alt} loading="lazy" />
                </div>
            </div>
        );
    }
    return (
        <div className={`${styles.panel} ${styles.panelAccent}`}>
            <div className={browser.window}>
                <div className={browser.bar} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                </div>
                <img className={browser.screen} src={visual.src} alt={visual.alt} loading="lazy" />
            </div>
        </div>
    );
}

function Details({ project, number }) {
    const { title, capability, status, description, tags = [], liveUrl, repoUrl } = project;
    return (
        <div className={styles.text}>
            <span className={styles.number} aria-hidden="true">
                {number}
            </span>
            <div className={styles.heading}>
                {status && <p className={styles.status}>{status}</p>}
                {capability && <p className={`eyebrow ${styles.capability}`}>{capability}</p>}
                <h3 className={styles.title}>{title}</h3>
            </div>
            <Description text={description} className={styles.description} />
            {tags.length > 0 && (
                <ul className="tag-list" aria-label="Skills and tools">
                    {tags.map((t) => (
                        <li key={t} className="tag">
                            {t}
                        </li>
                    ))}
                </ul>
            )}
            {(liveUrl || repoUrl) && (
                <div className="btn-row">
                    {liveUrl && (
                        <a className="btn btn--filled btn--sm" href={liveUrl} target="_blank" rel="noopener noreferrer">
                            Live demo <span aria-hidden="true">↗</span>
                            <span className="visually-hidden">: {title} (opens in a new tab)</span>
                        </a>
                    )}
                    {repoUrl && (
                        <a className="btn btn--outline btn--sm" href={repoUrl} target="_blank" rel="noopener noreferrer">
                            GitHub <span aria-hidden="true">↗</span>
                            <span className="visually-hidden">: {title} source code (opens in a new tab)</span>
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}

export default function ProjectRow({ project, number, flipped }) {
    // No screenshot → text-only card instead of a fake visual.
    if (!project.visual) {
        return (
            <article className={`card lift ${styles.textOnly}`}>
                <Details project={project} number={number} />
            </article>
        );
    }

    return (
        <article className={`${styles.row} ${flipped ? styles.flipped : ""}`}>
            <Visual visual={project.visual} />
            <Details project={project} number={number} />
        </article>
    );
}
