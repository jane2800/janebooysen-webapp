import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
    return(
        <div className={styles.MenuContainer}>
            <NavLink to='/home' className={({ isActive }) =>
            isActive ? styles.active : styles.LinkStyle
            }>Home</NavLink>

            <NavLink to='/cv' className={({ isActive }) =>
                isActive ? styles.active : styles.LinkStyle
            }>CV</NavLink>

            <NavLink to='/project' className={({ isActive }) =>
                isActive ? styles.active : styles.LinkStyle
            }>Project</NavLink>
            
            <NavLink to='/contact' className={({ isActive }) =>
                isActive ? styles.active : styles.LinkStyle
            }>Contact</NavLink>
        </div>
    )
}