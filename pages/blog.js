import Head from 'next/head';
import matter from 'gray-matter';
import BlogPost from '../components/BlogPost';
import blogStyles from '../styles/Blog.module.css';

export default function BlogPage(props) {
  const realData = props.data.map(blog => matter(blog));
  const listItems = realData.map(listItem => listItem.data);
  return (
    <div>
      <Head> 
        <title>warren yun</title>
      </Head>
      <div className={blogStyles.container}>
        <span className={blogStyles.blogTitle}>
            <strong>Blog</strong>
        </span>
        <div className={blogStyles.blogContainer}>
          {listItems.map((blog, i) => (
            <BlogPost key={i} blog={blog} />
          ))}
        </div>
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
