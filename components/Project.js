import projectStyles from '../styles/Project.module.css';

const Project = () => {
    return (
        <div className={projectStyles.container}>       
            <br /><br /><br /><br /><br /><br />  
            <div className={projectStyles.projectContent}>
                <span className={projectStyles.projTitle}>Projects</span>
                <div className={projectStyles.projCardDiv}>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>
                            <strong>Rona-Radar</strong>
                        </span>
                        <br /><br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>
                            <strong>TheraTracker</strong>
                        </span>
                        <br /><br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>
                            <strong>Midnight Hacks Website</strong>
                        </span>
                        <br /><br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>
                            <strong>G.O.A.T Notes</strong>
                        </span>
                        <br /><br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>
                            <strong>Heart Attack Analysis</strong>
                        </span>
                        <br /><br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>
                            <strong>AutoZoom</strong>
                        </span>
                        <br /><br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;