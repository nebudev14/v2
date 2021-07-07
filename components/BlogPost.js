import Link from 'next/link';
import blogPostStyles from '../styles/BlogPost.module.css';

function BlogPost({blog}) {
    return (
        <div className={blogPostStyles.blogPost}>
            <div>
                <img src={blog.img} />
                <div className={blogPostStyles.date}>{blog.date}</div>
                <Link href={`/posts/${blog.slug}`}>
                    <a className={blogPostStyles.blogTitle}>{blog.title}</a>
                </Link>
                <p>{blog.description}</p>
            </div>
        </div>
    );
}

export default BlogPost;