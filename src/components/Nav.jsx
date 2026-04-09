import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.MenuContainer}>
      <a href="#cv" className={styles.link}>CV</a>
      <a href="#project" className={styles.link}>Projects</a>
      <a href="#contact" className={styles.link}>Contact</a>
    </nav>
  );
}
