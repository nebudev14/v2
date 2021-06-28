import projectStyles from '../styles/Project.module.css';

const Project = () => {
    return (
        <div className={projectStyles.container}>       
            <br /><br /><br /><br /><br /><br />  
            <div className={projectStyles.projectContent}>
                <span className={projectStyles.projTitle}>Projects</span>
                <div className={projectStyles.projCardDiv}>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>Rona-Radar</span>
                        <br /><br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>TheraTracker</span>
                        <br /><br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>Midnight Hacks Website</span>
                        <br /><br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>G.O.A.T Notes</span>
                        <br /><br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>Heart Attack Analysis</span>
                        <br /><br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>AutoZoom</span>
                        <br /><br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;