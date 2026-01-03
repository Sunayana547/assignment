import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../data/blogs.json";

const BlogDetails = () => {
  const params = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const blogId = Number(params.id);

    for (let i = 0; i < blogData.length; i++) {
      if (blogData[i].id === blogId) {
        setBlog(blogData[i]);
        break;
      }
    }

    window.scrollTo(0, 0);
  }, [params.id]);

  if (blog === null) {
    return (
      <div
        className="container content"
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        <h2>Oops! Blog not found.</h2>
        <Link to="/" style={{ color: "var(--accent-color)" }}>
          Go back to home
        </Link>
      </div>
    );
  }

  const authorInitial = blog.author
    ? blog.author[0].toUpperCase()
    : "?";

  return (
    <div className="container content">
      <div style={{ maxWidth: "680px", margin: "50px auto" }}>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "42px",
            marginBottom: "20px",
          }}
        >
          {blog.title}
        </h1>

        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            style={{
              width: "100%",
              height: "380px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "30px",
            }}
          />
        )}

        <div className="author-profile" style={{ marginBottom: "30px" }}>
          <div className="author-avatar">{authorInitial}</div>

          <div>
            <div style={{ fontWeight: "500" }}>{blog.author}</div>
            <div
              style={{
                fontSize: "12px",
                color: "rgba(25,25,25,0.6)",
              }}
            >
              {blog.date}
            </div>
          </div>
        </div>

        <div
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            fontFamily: "var(--font-serif)",
            color: "rgba(25,25,25,0.8)",
          }}
        >
          {blog.content}
        </div>

        <div
          style={{
            marginTop: "50px",
            borderTop: "1px solid rgba(25,25,25,0.1)",
            paddingTop: "20px",
          }}
        >
          <Link
            to="/"
            style={{
              color: "var(--accent-color)",
              textDecoration: "none",
            }}
          >
            ← Back to all stories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
