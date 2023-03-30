import { useNavigate, useParams } from "react-router-dom";
import { projectList } from "../../utils/project-list.util";
import { GitHub } from "@mui/icons-material";
import './project-display.styles.css'

const PojectDisplay=()=>{
    const navigate = useNavigate();
    // const projectUrl = project.domainLink;
    const {id}=useParams();
    const project = projectList[id]
    return( <div className = 'project'>
        <h1
        onClick={()=>{
            window.open(project.domainLink);
        }}
        >{project.name}</h1>
        <img alt="project image" src={project.image}
             onClick={()=>{
            window.open(project.domainLink);}}
        />
        <GitHub id="iconGit"
            onClick={()=>{window.open(project.githubLink)}}
        />
        <p id="description">
            
            <b>Description:</b>{project.description}
        </p>
    </div>
    )
}

export default PojectDisplay;