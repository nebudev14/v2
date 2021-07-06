import Head from 'next/head';
import blogStyles from '../styles/Blog.module.css';

export default function BlogDisplay() {
  return (
    <div>
      <Head> 
        <title>warren yun</title>
      </Head>
      <div className={blogStyles.container}>
        <span className={blogStyles.blogTitle}>
            <strong>Blog</strong>
        </span>
      </div>
    </div>
  );
}
