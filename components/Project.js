import projectStyles from '../styles/Project.module.css';
import Nav from './Nav';

const Project = () => {
    return (
        <div className={projectStyles.container}>       
            <br /><br /><br /><br /> 
            <div className={projectStyles.projectContent}>
                <h1 className={projectStyles.projTitle}>Projects</h1>
            </div>
        </div>
    );
}

export default Project;