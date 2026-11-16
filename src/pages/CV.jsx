import styles from "./CV.module.css";
import cvData from "../data/cv";

function Timeline({ items }) {
    return (
        <ol className={styles.timeline}>
            {items.map((item) => (
                <li key={item.title} className={styles.entry}>
                    <span className={styles.dot} aria-hidden="true" />
                    <p className="eyebrow">{item.date}</p>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.body}>{item.body}</p>
                </li>
            ))}
        </ol>
    );
}

function CV() {
    const experience = cvData.experience.map((e) => ({
        date: e.year,
        title: `${e.position} · ${e.company}`,
        body: e.summary,
    }));
    const education = cvData.education.map((e) => ({
        date: e.year,
        title: e.degree,
        body: e.institution,
    }));

    return (
        <section id="cv" className="section" aria-label="CV">
            <div className={`container ${styles.grid}`}>
                <div>
                    <h2 className="section-title">Experience</h2>
                    <Timeline items={experience} />
                </div>
                <div>
                    <h2 className="section-title">Education</h2>
                    <Timeline items={education} />
                    <a className="text-link" href={cvData.links.cv} download>
                        Download full CV (PDF)&nbsp;<span aria-hidden="true">↓</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CV;
