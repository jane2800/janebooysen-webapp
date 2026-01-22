import TitleComp from "./title-comp.jsx";
import styles from "./Education.module.css"

function Education(props) {
    return (
        <div>
            <TitleComp text="Education" />
            <div className={styles.Education}>
                <p className={styles.degree}>{props.degree}</p>
                <div className={styles.spacer}>
                    <p className={styles.institution}>{props.institution}</p>
                    <p className={styles.year}>{props.year}</p>
                </div>
            </div>
        </div>
    );
}   

export default Education;