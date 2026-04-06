import { useEffect } from 'react';
import Sparkles from '../components/Sparkles.jsx';
import ScrambleText from '../components/ScrambleText.jsx';
import { useNavigate } from 'react-router-dom';
import styles from './Splash.module.css';

export default function Splash() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= window.innerHeight) {
                navigate('/home', { replace: true });
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navigate]);

    return (
        <div className={styles.splash}>
            <Sparkles />
            <div className={styles.stickyContent}>
                <div className={styles.content}>
                    <div className={styles.label}>Portfolio</div>
                    <h1 className={styles.name}>
                        <ScrambleText text="Jané Booysen" />
                    </h1>
                    <p className={styles.title}>Software Engineer Student</p>
                    <p className={styles.location}>Berlin, Germany</p>
                </div>
                <div className={styles.scrollHint}>
                    <span className={styles.line} />
                    scroll
                </div>
            </div>
        </div>
    );
}
