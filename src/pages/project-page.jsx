
import '../css-styles/project-page.css';
import Header from "../components/Header";
import TitleComp from '../components/title-comp';

function ProjectPage() {
    return (
        <div className="ProjectPage">
            <Header />
            <TitleComp text="My Projects" />
        </div>
    );
}

export default ProjectPage;