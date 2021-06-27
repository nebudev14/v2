import Head from 'next/head';
import Blog from '../components/BlogPosts';

export default function ProjectDisplay() {
  return (
    <div>
      <Head> 
        <title>warren yun</title>
      </Head>
      <Blog />
    </div>
  );
}
