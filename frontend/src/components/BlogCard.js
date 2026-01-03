import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const initial = blog.author ? blog.author.charAt(0) : '?';

    return (
        <div className="blog-card" style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px'
        }}>
            {/* LEFT CONTENT */}
            <div style={{ flex: 1 }}>
                <div className="author-profile">
                    <div className="author-avatar">{initial}</div>
                    <div className="blog-meta-container">{blog.author}</div>
                </div>

                <Link to={`/blog/${blog.id}`} style={{ textDecoration: 'none' }}>
                    <h2 className="blog-card-title">{blog.title}</h2>
                </Link>

                <p className="blog-desc">{blog.shortDescription}</p>

                <div className="blog-card-footer">
                    <span className="blog-date">{blog.date}</span>
                    <Link to={`/blog/${blog.id}`} className="read-more">
                        Read more →
                    </Link>
                </div>
            </div>

            {/* RIGHT IMAGE */}
            {blog.image && (
                <img
                    src={blog.image}
                    alt={blog.title}
                    style={{
                        width: '160px',
                        height: '100px',
                        objectFit: 'cover',
                        borderRadius: '6px'
                    }}
                />
            )}
        </div>
    );
};

export default BlogCard;
