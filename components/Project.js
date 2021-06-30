import projectStyles from '../styles/Project.module.css';

const Project = () => {
    return (
        <div className={projectStyles.container}>       
            <div className={projectStyles.projectContent}>
                <span className={projectStyles.projTitle}>
                    <strong>Projects</strong>
                </span>
                <div className={projectStyles.projCardDiv}>
                    <a href="https://github.com/Rona-Radar/app" target="_blank" className={projectStyles.projLink}>    
                        <div className={projectStyles.projCard}>
                            <div className={projectStyles.projBox}>
                                <span className={projectStyles.projCardTitle}>
                                    <strong>
                                        Rona Radar
                                    </strong>
                                </span>
                                <br /><br />
                                <span className={projectStyles.projCardDesc}>This is a project.</span>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/NebuDev14/TheraTracker" target="_blank" className={projectStyles.projLink}>
                        <div className={projectStyles.projCard}>
                            <div className={projectStyles.projBox}>
                                <span className={projectStyles.projCardTitle}>
                                    <strong>
                                        Thera Tracker
                                    </strong>
                                </span>
                                <br /><br />
                                <span className={projectStyles.projCardDesc}>This is a project.</span>
                            </div>
                        </div>
                     </a>
                    <a href="https://www.youtube.com/watch?v=1FFBsX5C61Q" target="_blank" className={projectStyles.projLink}>
                        <div className={projectStyles.projCard}>
                            <div className={projectStyles.projBox}>
                                <span className={projectStyles.projCardTitle}>
                                    <strong>
                                        W.I.P.
                                    </strong>
                                </span>
                                <br /><br />
                                <span className={projectStyles.projCardDesc}>Check back soon</span>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/NebuDev14/G.O.A.T-Notes" target="_blank" className={projectStyles.projLink}>
                        <div className={projectStyles.projCard}>
                            <div className={projectStyles.projBox}>
                                <span className={projectStyles.projCardTitle}>
                                    <strong>
                                        G.O.A.T Notes
                                    </strong>
                                </span>
                                <br /><br />
                                <span className={projectStyles.projCardDesc}>This is a project.</span>
                            </div>
                        </div>
                    </a>
                    <a href="https://midnighthacks.tech/" target="_blank" className={projectStyles.projLink}>
                        <div className={projectStyles.projCard}>
                            <div className={projectStyles.projBox}>
                                <span className={projectStyles.projCardTitle}>
                                    <strong>
                                        Midnight Hacks
                                    </strong>
                                </span>
                                <br /><br />
                                <span className={projectStyles.projCardDesc}>This is a project.</span>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className={projectStyles.projLink}>
                        <div className={projectStyles.projCard}>
                            <div className={projectStyles.projBox}>
                                <span className={projectStyles.projCardTitle}>
                                    <strong>
                                        W.I.P.
                                    </strong>
                                </span>
                                <br /><br />
                                <span className={projectStyles.projCardDesc}>Check back soon</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;