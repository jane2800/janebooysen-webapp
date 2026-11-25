import styles from "./Header.module.css";
import Badge from "./Badge";
import Nav from "./Nav";

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
                </div>
            </div>
        </header>
    );
}

export default Header;
