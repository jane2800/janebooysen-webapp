import styles from "./ProjectRow.module.css";
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
    const { title, description, tags = [], liveUrl, caseStudyUrl } = project;
    return (
        <div className={styles.text}>
            <span className={styles.number} aria-hidden="true">
                {number}
            </span>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            {tags.length > 0 && (
                <ul className="tag-list" aria-label="Built with">
                    {tags.map((t) => (
                        <li key={t} className="tag">
                            {t}
                        </li>
                    ))}
                </ul>
            )}
            {(liveUrl || caseStudyUrl) && (
                <div className="btn-row">
                    {liveUrl && (
                        <a className="btn btn--filled btn--sm" href={liveUrl} target="_blank" rel="noopener noreferrer">
                            Live demo <span aria-hidden="true">↗</span>
                            <span className="visually-hidden">: {title} (opens in a new tab)</span>
                        </a>
                    )}
                    {caseStudyUrl && (
                        <a className="btn btn--outline btn--sm" href={caseStudyUrl}>
                            Case study <span aria-hidden="true">→</span>
                            <span className="visually-hidden">: {title}</span>
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
