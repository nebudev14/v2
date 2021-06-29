import projectStyles from '../styles/Project.module.css';

const Project = () => {
    return (
        <div className={projectStyles.container}>       
            <br /><br /><br /><br /><br /><br />  
            <div className={projectStyles.projectContent}>
                <span className={projectStyles.projTitle}>
                    <strong>Projects</strong>
                </span>
                <div className={projectStyles.projCardDiv}>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>
                            <strong>
                                <a href="https://github.com/Rona-Radar/app" target="_blank">Rona-Radar</a>
                            </strong>
                        </span>
                        <br /><br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>
                            <strong>
                                <a href="https://github.com/NebuDev14/TheraTracker" target="_blank">TheraTracker</a>
                            </strong>
                        </span>
                        <br /><br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>
                            <strong>
                                <a href="https://www.youtube.com/watch?v=1FFBsX5C61Q" target="_blank">W.I.P.</a>
                            </strong>
                        </span>
                        <br /><br />
                        <span className={projectStyles.projCardDesc}>Check back soon</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>
                            <strong>
                                <a href="https://github.com/NebuDev14/G.O.A.T-Notes" target="_blank">G.O.A.T Notes</a>
                            </strong>
                        </span>
                        <br /><br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>
                            <strong>
                                <a href="https://midnighthacks.tech/" target="_blank">Midnight Hacks</a>
                            </strong>
                        </span>
                        <br /><br />
                        <span className={projectStyles.projCardDesc}>This is a project.</span>
                    </div>
                    
                    <div className={projectStyles.projCard}>
                        <span className={projectStyles.projCardTitle}>
                            <strong>
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">W.I.P.</a>
                            </strong>
                        </span>
                        <br /><br />
                        <span className={projectStyles.projCardDesc}>Check back soon</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;