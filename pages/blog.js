import Head from 'next/head';
import Blog from '../components/BlogPosts';
import Nav from '../components/Nav';

export default function BlogDisplay() {
  return (
    <div>
      <Head> 
        <title>warren yun</title>
      </Head>
      <Blog />
    </div>
  );
}
