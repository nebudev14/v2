import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import blogStyles from '../../styles/Blog/Blog.module.css';

function Blog(props) {
    const {data, content} = matter(props.content);
    return (
        <div>
            <div className={blogStyles.header}>
                <h1 className={blogStyles.title}>{data.title}</h1>
                <div className={blogStyles.info}>
                    <h1>{data.description}</h1>
                    <h1>Published {data.date}</h1>
                </div>
            </div>
            <div className={blogStyles.articleContainer}>
                <ReactMarkdown children={content} />
            </div>
        </div>
    );
}

export const getServerSideProps = async context => {
    const fs = require("fs");
    const {blog} = context.params; 
    const content = fs.readFileSync(`${process.cwd()}/content/${blog}.md`, 'utf-8');

    return {
        props: {
            content
        }
    };
}

export default Blog;