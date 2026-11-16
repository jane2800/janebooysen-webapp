import { useEffect } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Facts from "../components/Facts";
import Ticker from "../components/Ticker";
import Work from "../components/Work";
import CV from "./CV";
import Languages from "../components/Languages";
import ContactPage from "./Contact";
import Footer from "../components/Footer";

/** Single-page portfolio. `section` (from the old /cv, /project, /contact
 *  routes) scrolls straight to that part of the page. */
function HomePage({ section }) {
    useEffect(() => {
        if (!section) return;
        document.getElementById(section)?.scrollIntoView();
    }, [section]);

    return (
        <>
            <a href="#main" className="skip-link">
                Skip to content
            </a>
            <Header />
            <main id="main">
                <span id="top" />
                <Hero />
                <Facts />
                <Ticker />
                <Work />
                <CV />
                <Languages />
                <ContactPage />
            </main>
            <Footer />
        </>
    );
}

export default HomePage;
