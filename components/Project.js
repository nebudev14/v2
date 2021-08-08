import projectStyles from '../styles/Project.module.css';

function Project({details}) {
    return (
        <div className={projectStyles.projCard}>
            <a href={details.link} target="_blank" className={projectStyles.projLink}>    
                <div className={projectStyles.projBox}>
                    <span className={projectStyles.projCardTitle}>
                        <strong>
                            {details.name}
                        </strong>
                    </span>
                    <span className={projectStyles.projCardDesc}>{details.desc}</span>
                </div>
            </a>
        </div>
    );
}

export default Project;