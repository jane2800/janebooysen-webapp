import { useEffect, useRef, useState } from "react";

import projectStyles from './Projects.module.css';
import iphoneStyles from '../components/iphone.module.css';
import computerStyles from '../components/computer.module.css';
import TitleComp from '../components/Title';
import cvData from '../data/cv';

function ProjectPage() {
  return (
    <div className={projectStyles.projectPage}>
      <TitleComp text="My Projects" />
      <div className={projectStyles.projectList}>
        {cvData.projects.map((project, index) => (
          <FadeInSection key={index}>
            <div className={`${projectStyles.projectCard} ${index % 2 !== 0 ? projectStyles.reverse : ""}`}>
              <div className={project.device === "phone" ? iphoneStyles.device : computerStyles.device}>
                <div className={project.device === "phone" ? iphoneStyles.screen : computerStyles.screen}>
                  <iframe
                    title={project.title}
                    src={project.url}
                    className={project.device === "phone" ? iphoneStyles.iframe : computerStyles.iframe}
                  />
                </div>
              </div>
              <div className={projectStyles.projectInfo}>
                <h2 className={projectStyles.projectTitle}>{project.title}</h2>
                <div className={projectStyles.tagList}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={projectStyles.tag}>{tag}</span>
                  ))}
                </div>
                <p className={projectStyles.projectDescription}>{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={projectStyles.projectLink}
                >
                  View Project →
                </a>
              </div>
            </div>
          </FadeInSection>
        ))}
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
      { threshold: [0, 0.4, 1] }
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
