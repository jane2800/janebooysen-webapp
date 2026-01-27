import styles from "./Language.module.css";
import {BsStar, BsStarFill} from "react-icons/bs";

export default function Languages({languages}) {
    return (
        <div className={styles.LanguagesPage}>
            <div className={styles.languageList}>
                {languages.map((lang, index) => (
                    <div key={index} className={styles.languageItem}>
                        <div className={styles.languageName}>{lang.name}</div>  
                        <div key={index} className={styles.languageIconContainer}>
                            {Array.from({ length: lang.level }, (_, i) => (
                                <BsStarFill className={styles.languageIcon} key={i} />
                            ))}
                            {Array.from({ length: 6 - lang.level }, (_, i) => (
                                <BsStar className={styles.languageIcon} key={i} />
                            ))}
                        </div>  
                    </div>
                ))}
            </div>
        </div>
    );
}