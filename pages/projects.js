import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';

import projectStyles from '../styles/Project.module.css';

const projects = [
    {
        "name": "Rona Radar",
        "link": "https://github.com/Rona-Radar/app",
        "desc": "Find nearby hospitals and doctors to get vaccinated at!"
    },
    {
        "name": "Thera Tracker",
        "link": "https://github.com/NebuDev14/TheraTracker",
        "desc": "Find nearby thearpists and psychiatrists!"
    },
    {
        "name": "The Orpheus Show",
        "link": "https://podcast.hackclub.com/",
        "desc": "Co-hosted episodes, created most of the website"
    },
    {
        "name": "G.O.A.T Notes",
        "link": "https://github.com/NebuDev14/G.O.A.T-Notes",
        "desc": "Note taking made easy!"
    },
    {
        "name": "Midnight Hacks",
        "link": "https://midnighthacks.tech/",
        "desc": "A hackathon for beginners in NYC!"
    },
    {
        "name": "Control Panel",
        "link": "https://github.com/NebuDev14/Control-Panel",
        "desc": "Mobile app written in dart to control parts of my computer!"
    },
];

export default function ProjectDisplay() {
  return (
    <div>
      <Head> 
        <title>warren yun</title>
      </Head>
      <div className={projectStyles.container}>       
            <span className={projectStyles.projTitle}>
                <strong>Projects</strong>
            </span>
            <div className={projectStyles.projCardDiv}>
                {projects.map((project, i) => (
                    <ProjectCard details={project} key={i} />
                ))}
            </div>
        </div>
    </div>
  );
}
