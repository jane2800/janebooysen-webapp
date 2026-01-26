
import './Projects.module.css';

import Header from "../components/Header";
import TitleComp from '../components/Title';

function ProjectPage() {
    return (
        <div className="ProjectPage">
            <Header />
            <TitleComp text="My Projects" />
        </div>
    );
}

export default ProjectPage;