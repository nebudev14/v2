import projectStyles from '../styles/Project.module.css';
import Nav from './Nav';

const Project = () => {
    return (
        <div className={projectStyles.container}>       
            <br /><br /><br /><br /> 
            <div className={projectStyles.projectContent}>
                <h1 className={projectStyles.projTitle}>Projects</h1>
                <div className={projectStyles.projCardDiv}>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>p1</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>p2</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>p3</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>p4</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>p5</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>p6</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;