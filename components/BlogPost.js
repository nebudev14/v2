import Link from 'next/link';
import blogPostStyles from '../styles/Blog/BlogPost.module.css';

function BlogPost({blog}) {
    return (
        <div className={blogPostStyles.blogPost}>
            <div>
                <Link href={`/posts/${blog.slug}`}>
                    <a className={blogPostStyles.blogTitle}>
                        <strong>{blog.title}</strong>
                    </a>
                </Link>
                <div className={blogPostStyles.date}>{blog.date}</div>
            </div>
        </div>
    );
}

export default BlogPost;