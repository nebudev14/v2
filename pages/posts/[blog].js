import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import blogStyles from '../../styles/Blog/Blog.module.css';

function Blog(props) {
    const {data, content} = matter(props.content);
    return (
        <div className={blogStyles.articleContainer}>
            <ReactMarkdown children={content} />
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