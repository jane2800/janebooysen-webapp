import style from "./Footer.module.css";

function Footer() {
    return (
        <footer className={style.footerContainer}>
            <p>&copy; {new Date().getFullYear()} Jané Booysen. All rights reserved.</p>
        </footer>
    );
}

export default Footer;