import styles from "./Header.module.css";
import logo from "../img/logo.png";
import Nav from "./Nav";

function Header() {
  return (
    <div className={styles.HeaderContainer}>
      <header className={styles.AppHeaderContainer}>
        <img 
            src={logo} 
            alt="Logo"
            className={styles.AppLogo}></img>
        <p className={styles.AppHeader}>Jané Booysen</p>
      </header>
      <Nav />
    </div>
  );
}

export default Header;
