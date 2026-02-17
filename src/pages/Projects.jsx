import { useEffect, useRef, useState } from "react";

import projectStyles from './Projects.module.css';
import iphoneStyles from '../components/iphone.module.css';
import TitleComp from '../components/Title';

const numSteps = 20.0;

function ProjectPage() {
  return (
    <div className={projectStyles.projectPage}>
      <TitleComp text="My Projects" />

        <div className={projectStyles.projectContainer}>
        <FadeInSection>
            <div className={iphoneStyles.device}>
                <div className={iphoneStyles.screen}>
                    <iframe
                    title="Projects"
                    src="https://jane2800.github.io/uci-redesign/"
                    className={iphoneStyles.iframe}
                    />
                </div>
            </div>
        </FadeInSection>

        <FadeInSection>
            <div className={iphoneStyles.device}>
                <div className={iphoneStyles.screen}>
                    <iframe
                    title="Projects"
                    src="https://jane2800.github.io/uci-redesign/"
                    className={iphoneStyles.iframe}
                    />
                </div>
            </div>
        </FadeInSection>
      </div>
    </div>
  );
}

function FadeInSection({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.intersectionRatio >= 0.4) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    },
    {
      threshold: [0, 0.4, 1],
    }
  );

  if (ref.current) observer.observe(ref.current);

  return () => observer.disconnect();
}, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : "translateY(40px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      {children}
    </div>
  );
}


export default ProjectPage;
