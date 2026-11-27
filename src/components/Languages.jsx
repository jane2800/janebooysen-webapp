import styles from "./Language.module.css";
import { BsStar, BsStarFill } from "react-icons/bs";
import cvData from "../data/cv";

const MAX = 6;

export default function Languages() {
    return (
        <section className="section" aria-labelledby="languages-title">
            <div className="container">
                <h2 id="languages-title" className="section-title">
                    I speak…
                </h2>
                <ul className={styles.list}>
                    {cvData.languages.map((lang) => (
                        <li key={lang.name} className={`card lift ${styles.item}`}>
                            <div className={styles.head}>
                                <span className={styles.name}>{lang.name}</span>
                                <span className={styles.score} aria-hidden="true">
                                    {lang.label}
                                </span>
                            </div>
                            <div
                                className={styles.stars}
                                role="img"
                                aria-label={`${lang.name}: ${lang.label}, ${lang.level} out of ${MAX} stars`}
                            >
                                {Array.from({ length: MAX }, (_, i) =>
                                    i < lang.level ? <BsStarFill key={i} /> : <BsStar key={i} />
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
