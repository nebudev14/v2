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
        "name": "Midnight Hacks",
        "link": "https://midnighthacks.tech/",
        "desc": "A hackathon for beginners in NYC!"
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
        "name": "Lumiere",
        "link": "https://github.com/project-lumiere/lumiere.codes",
        "desc": "A website for computer science publications!"
    },
    {
        "name": "G.O.A.T Notes",
        "link": "https://github.com/NebuDev14/G.O.A.T-Notes",
        "desc": "Note taking made easy!"
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
