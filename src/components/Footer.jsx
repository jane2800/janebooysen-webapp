import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={`container ${styles.footer}`}>
            <p>&copy; {new Date().getFullYear()} Jané Booysen</p>
            <p>
                Hover my name. <span aria-hidden="true">✦</span>
            </p>
            <a className={styles.link} href="/christmas/">
                Christmas
            </a>
        </footer>
    );
}

export default Footer;
