import styles from "./About.module.css";
import logo from "../img/logo.png";


export default function About() {
    return (
        <div className={styles.AboutPage}>
            <div className={styles.AboutContainer}>
                <img className={styles.AboutImage} src={logo} alt="Jane" />
                <p className={styles.AboutText}>
                    Hello! I'm Jane, a passionate Interaction Design student at the University of Europe for Applied Sciences. I love creating user-friendly digital experiences and have a keen interest in volunteer work, particularly in teaching coding to kids and making great coffee as a barista. When I'm not studying or volunteering, I enjoy exploring new technologies and honing my design skills.
                </p>
            </div>
        </div>
    );
}