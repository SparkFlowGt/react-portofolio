
import ProjectItem from "../../components/project-item/project-item.component";
import { projectList } from "../../utils/project-list.util";
import './projects.styles.css'

const Projects = () => {
    return(
        <div className="projects">
            <h1> My personal Projects</h1>
            <div className="projectList">
                {projectList.map((project,idx)=>{
                    return <ProjectItem id={idx} name={project.name} image={project.image}/>
                })}
            </div>
        </div>
    );
}

export default Projects;