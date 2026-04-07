import styles from "./Header.module.css";
import logo from "../img/logo.png";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";

function Header({ visible = true }) {
  return (
    <div className={styles.HeaderContainer} style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'all' : 'none', transition: 'opacity 0.4s ease' }}>
      <header className={styles.AppHeaderContainer}>
        <img 
            src={logo} 
            alt="Logo"
            className={styles.AppLogo}></img>
        <p className={styles.AppHeader}>Jané Booysen</p>
      </header>
      <div className={styles.navSpacer}>
        <Nav />
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
