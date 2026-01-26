import './Home.module.css';

import Header from "../components/Header";
import Title from "../components/Title.jsx";

import ContactPage from './Contact.jsx';
import CV from './CV.jsx';
import ProjectPage from './Projects.jsx';

function HomePage(){
    return(
        <div className="home-page">
            <Header />
            <Title text="Welcome to My Home Page" />
            <section id="cv" data-nav-section>
                <CV />
            </section>

            <section id="project" data-nav-section>
                <ProjectPage />
            </section>

            <section id="contact" data-nav-section>  
                <ContactPage />
            </section>
        </div>);
}
export default HomePage;