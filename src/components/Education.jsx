import styles from "./Education.module.css"

function Education({item}) {
    const {degree, institution, year} = item;

    return (
        <div className={styles.Education}>
            <p className={styles.degree}>{degree}</p>
            <div className={styles.spacer}>
                <p className={styles.institution}>{institution}</p>
                <p className={styles.year}>{year}</p>
            </div>
        </div>
    );
}   

export default Education;