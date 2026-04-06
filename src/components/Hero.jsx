import styles from "./Hero.module.css";
import ScrambleText from "./ScrambleText";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.label}>Portfolio</div>
                <h1 className={styles.name}>
                    <ScrambleText text="Jané Booysen" />
                </h1>
                <p className={styles.title}>Software Engineer Student</p>
                <p className={styles.location}>Berlin, Germany</p>
            </div>
            <a href="#cv" className={styles.scrollHint}>
                <span className={styles.scrollLine} />
                scroll
            </a>
        </section>
    );
}
