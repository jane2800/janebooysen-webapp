import styles from './CV.module.css';

import Title from "../components/Title.jsx";
import Education from "../components/Education.jsx";
import Header from "../components/Header";

import educationData from "../data/education";

function CV() {
  return (
    <div className="App">
      <Header />
      <Title text={"Education"} />
      <section className={styles.EducationList}>
        {educationData.map((item, index) => (
            <Education key={index} item={item} />
        ))}
      </section>
    </div>
  );
}

export default CV; 