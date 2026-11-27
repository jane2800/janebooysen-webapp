import styles from "./Work.module.css";
import ProjectRow from "./ProjectRow";
import InProgressCard from "./InProgressCard";
import { shipped, inProgress } from "../data/projects";

const pad = (n) => String(n).padStart(2, "0");

export default function Work() {
    return (
        <section id="work" className="section" aria-labelledby="work-title">
            <div className="container">
                <div className={styles.head}>
                    <div>
                        <h2 id="work-title" className="section-title">
                            Things I’ve made
                        </h2>
                        <p className={styles.subtitle}>
                            Selected work across product, technology and creative problem-solving.
                        </p>
                    </div>
                    <p className={styles.count}>
                        {pad(shipped.filter((p) => !p.status).length)} shipped · {pad(inProgress.length)} brewing
                    </p>
                </div>

                <ol className={styles.list}>
                    {shipped.map((project, i) => (
                        <li key={project.title}>
                            <ProjectRow project={project} number={pad(i + 1)} flipped={i % 2 === 1} />
                        </li>
                    ))}
                </ol>

                {inProgress.length > 0 && (
                    <div className={styles.works}>
                        <h3 className={`eyebrow ${styles.worksTitle}`}>
                            <span aria-hidden="true">● </span>In the works
                        </h3>
                        <ul className={styles.worksList}>
                            {inProgress.map((project, i) => (
                                <li key={`${project.title}-${i}`}>
                                    <InProgressCard project={project} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}
