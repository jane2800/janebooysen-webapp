import styles from './CV.module.css';

import Title from "../components/Title.jsx";
import Education from "../components/Education.jsx";

import cvData from "../data/cv";
import Experience from '../components/Experience.jsx';
import Skills from '../components/Skills.jsx';
import Languages from '../components/Languages.jsx';

function CV() {
  return (
      <div className={styles.CVPage} >
        <Title text={"Education"} />
        <div className={styles.EducationList}>
          {cvData.education.map((item, index) => (
              <Education key={index} item={item} />
          ))}
        </div>
        <div className={styles.ExperienceList}>
          <Title text={"Experience"} />
          {cvData.experience.map((item, index) => (
            <Experience key={index} item={item} />
          ))}
        </div>
        <div className={styles.SkillsSection}>
          <Title text={"Skills"} />
          <Skills skills={cvData.skills} />
        </div>
        <div className={styles.LanguagesSection}>
          <Title text={"Languages"} />
          <Languages languages={cvData.languages} />
        </div>
      </div>
  );
}

export default CV; 