import blogStyles from '../styles/Blog.module.css';

const BlogPosts = () => {
    return (
        <div className={blogStyles.container}>
            <span className={blogStyles.blogTitle}>
                <strong>Blog</strong>
            </span>
        </div>
    );
}

export default BlogPosts;