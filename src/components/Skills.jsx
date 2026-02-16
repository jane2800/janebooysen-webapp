import styles from './Skills.module.css';

export default function Skills({ skills }) {
    return (
        <div className={styles.skillsPage}>
            <ul className={styles.skillsList}>
                {skills.map((skill, index) => (
                <li key={index} className={styles.skillCard}>
                    <span className={styles.skillItem}>{skill}</span>
                </li>
                ))}
            </ul>
        </div>
    );
}