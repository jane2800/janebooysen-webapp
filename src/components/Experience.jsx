import styles from "./Experience.module.css";

export default function Experience({item}) {
    const {position, company, year, notes} = item;
    
    return (
        <div className={styles.ExperiencePage}>
            <div className={styles.Experience}>
                <h3 className={styles.position}>{position}</h3>
                <p className={styles.company}>{company}</p>
                <p className={styles.year}>{year}</p>
                <ul className={styles.notes}>
                    {notes.map((note, index) => (
                        <li key={index} className={styles.noteItem}>{note}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
