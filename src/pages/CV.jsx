import styles from './CV.module.css';

import Title from "../components/Title.jsx";
import Education from "../components/Education.jsx";

import educationData from "../data/education";

function CV() {
  return (
      <div className={styles.CVPage} >
        <Title text={"Education"} />
        <div className={styles.EducationList}>
          {educationData.map((item, index) => (
              <Education key={index} item={item} />
          ))}
        </div>
      </div>
  );
}

export default CV; 