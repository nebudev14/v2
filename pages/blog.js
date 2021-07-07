import Head from 'next/head';
import blogStyles from '../styles/Blog.module.css';
import matter from 'gray-matter';

export default function BlogDisplay(props) {
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

export const getStaticProps = async () => {
  const fs = require("fs");
  const files = fs.readdirSync(`${process.cwd()}/content`, 'utf-8');
  const blogs = files.filter(fn => fn.endsWith(".md"));
  const data = blogs.map(blog => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8"
    });
    return rawContent;
  });

  return {
    props: {
      data
    }
  };
}
