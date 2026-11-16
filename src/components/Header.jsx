import styles from "./Header.module.css";
import Badge from "./Badge";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";

function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.inner}`}>
                <a href="#top" className={styles.brand}>
                    <Badge />
                    <span className={styles.name}>Jané Booysen</span>
                </a>
                <div className={styles.right}>
                    <Nav />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}

export default Header;
