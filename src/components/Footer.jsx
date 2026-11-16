import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={`container ${styles.footer}`}>
            <p>&copy; {new Date().getFullYear()} Jané Booysen</p>
            <p>
                Hover my name. Flip the theme. <span aria-hidden="true">✦</span>
            </p>
        </footer>
    );
}

export default Footer;
