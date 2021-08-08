import Head from 'next/head';
import Project from '../components/Project';

import projectStyles from '../styles/Project.module.css';

const projects = [
    {
        "name": "Rona Radar",
        "link": "https://github.com/Rona-Radar/app",
        "desc": "This is a project."
    },
    {
        "name": "Thera Tracker",
        "link": "https://github.com/NebuDev14/TheraTracker",
        "desc": "This is a project."
    },
    {
        "name": "W.I.P.",
        "link": "https://www.youtube.com/watch?v=1FFBsX5C61Q",
        "desc": "Check back soon!"
    },
    {
        "name": "G.O.A.T Notes",
        "link": "https://github.com/NebuDev14/G.O.A.T-Notes",
        "desc": "This is a project."
    },
    {
        "name": "Midnight Hacks",
        "link": "https://midnighthacks.tech/",
        "desc": "This is a project."
    },
    {
        "name": "W.I.P.",
        "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "desc": "Check back soon!"
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
                    <Project details={project} key={i} />
                ))}
            </div>
        </div>
    </div>
  );
}
