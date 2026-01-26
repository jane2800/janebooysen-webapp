import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [active, setActive] = useState("cv");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("[data-nav-section]")
    );

    const calculateActiveSection = () => {
      let closestSection = null;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(
          rect.top + rect.height / 2 - window.innerHeight / 2
        );

        console.log(distance, section.id);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section.id;
        }

        console.log("Closest:", closestSection);
      });

      if (closestSection) {
        setActive(closestSection);
      }
    };

    const observer = new IntersectionObserver(
      () => {
        calculateActiveSection();
      },
      { threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    // run once on load
    calculateActiveSection();

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.MenuContainer}>
      <a href="#cv" className={active === "cv" ? styles.active : styles.link}>
        CV
      </a>
      <a
        href="#project"
        className={active === "project" ? styles.active : styles.link}
      >
        Projects
      </a>
      <a
        href="#contact"
        className={active === "contact" ? styles.active : styles.link}
      >
        Contact
      </a>
    </nav>
  );
}
