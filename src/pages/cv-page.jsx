import Education from "../components/Education.jsx";
import Header from "../components/Header";

import '../css-styles/cv-page.css';
import '../css-styles/edu-comp.css';



function CV() {
  return (
    <div className="App">
      <Header />
      <Education 
        degree={"Hello"} 
        institution={"University of Europe for Applied Sciences"} 
        year={"2024-2027"} />
    </div>
  );
}


export default CV; 