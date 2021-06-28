import projectStyles from '../styles/Project.module.css';

const Project = () => {
    return (
        <div className={projectStyles.container}>       
            <br /><br /><br /><br /><br /><br />  
            <div className={projectStyles.projectContent}>
                <span className={projectStyles.projTitle}>Projects</span>
                <div className={projectStyles.projCardDiv}>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>p1</span>
                        <br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>p2</span>
                        <br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>p3</span>
                        <br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>p4</span>
                        <br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>p5</span>
                        <br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>p6</span>
                        <br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;