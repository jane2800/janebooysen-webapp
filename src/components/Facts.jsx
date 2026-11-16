import styles from "./Facts.module.css";
import cvData from "../data/cv";

export default function Facts() {
    return (
        <div className="container">
            <dl className={styles.strip}>
                {cvData.facts.map((f) => (
                    <div key={f.label} className={styles.cell}>
                        <dt className="eyebrow">{f.label}</dt>
                        <dd className={styles.value}>{f.text}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
