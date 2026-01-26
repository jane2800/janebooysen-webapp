import styles from './Skills.module.css';

export default function Skills({ skills }) {

    return (
        <div className={styles.SkillsPage}>
            <ul className={styles.skillsList}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.skillItem}>
                        {skill}
                    </div>
                ))}
            </ul>
        </div>
    );
}