
import projectStyles from './Projects.module.css';
import iphoneStyles from '../components/iphone.module.css'

import TitleComp from '../components/Title';

function ProjectPage() {
    return (
        <div id="project" className={projectStyles.projectPage}>
            <TitleComp text="My Projects" />
            <div className={projectStyles.componentBox}>
                <div className={iphoneStyles.device}>
                    <div className={iphoneStyles.screen}>
                        <iframe
                            title="Projects"
                            src="https://jane2800.github.io/uci-redesign/"
                            className={iphoneStyles.iframe}
                        />
                    </div>
                </div>
                <div className={iphoneStyles.device}>
                    <div className={iphoneStyles.screen}>
                        <iframe
                            title="Projects"
                            src="https://jane2800.github.io/uci-redesign/"
                            className={iphoneStyles.iframe}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;