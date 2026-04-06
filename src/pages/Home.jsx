import styles from './Home.module.css';
import { useEffect, useRef, useState } from 'react';

import Header from "../components/Header";
import ContactPage from './Contact.jsx';
import CV from './CV.jsx';
import ProjectPage from './Projects.jsx';
import Sparkles from '../components/Sparkles.jsx';
import ScrambleText from '../components/ScrambleText.jsx';

function HomePage(){
    const splashRef = useRef(null);
    const [headerVisible, setHeaderVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setHeaderVisible(!entry.isIntersecting),
            { threshold: 0 }
        );
        if (splashRef.current) observer.observe(splashRef.current);
        return () => observer.disconnect();
    }, []);

window.onload = function() {
    if(window.location.hash) {
        // Section is already scrolled to by browser
    } else {
        // Optional: force default section if no hash
        window.location.hash = "#myTargetSection";
    }
};

    return(
        <main>
            <Sparkles/>
            <Header visible={headerVisible} />

            <section ref={splashRef} className={styles.splash} id="splash">
                <div className={styles.stickyContent}>
                    <div className={styles.content}>
                        <div className={styles.label}>Portfolio</div>
                        <h1 className={styles.name}>
                            <ScrambleText text="Jané Booysen" onMount />
                        </h1>
                        <p className={styles.heroTitle}>Software Engineer Student</p>
                        <p className={styles.location}>Berlin, Germany</p>
                    </div>
                    <div className={styles.scrollHint}>
                        <span className={styles.line} />
                        scroll
                    </div>
                </div>
            </section>

            <section id="cv" data-nav-section>
                <CV />
            </section>

            <section id="project" data-nav-section>
                <ProjectPage />
            </section>

            <section id="contact" data-nav-section>
                <ContactPage />
            </section>
        </main>
    );
}
export default HomePage;
