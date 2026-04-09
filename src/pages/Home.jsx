import styles from './Home.module.css';
import { useEffect, useRef, useState } from 'react';

import Sparkles from '../components/Sparkles.jsx';
import ScrambleText from '../components/ScrambleText.jsx';

import Header from "../components/Header";
import ContactPage from './Contact.jsx';
import CV from './CV.jsx';
import ProjectPage from './Projects.jsx';
import Footer from '../components/Footer.jsx';

function HomePage(){
    const splashRef = useRef(null);
    const [headerVisible, setHeaderVisible] = useState(() => {
        const hash = window.location.hash;
        return !!hash && hash !== '#splash';
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setHeaderVisible(!entry.isIntersecting),
            { threshold: 0 }
        );
        if (splashRef.current) observer.observe(splashRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('[data-nav-section]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        window.history.replaceState(null, '', `#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: '0px 0px -50% 0px', threshold: 0 }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return(
        <main>
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
            <Footer />
            <Sparkles/>
        </main>
    );
}
export default HomePage;
