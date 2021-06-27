import Head from 'next/head';
import Project from '../components/Project';
import Nav from '../components/Nav';

export default function ProjectDisplay() {
  return (
    <div>
      <Head> 
        <title>warren yun</title>
      </Head>
      <Nav />
      <Project />
    </div>
  );
}
