import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import blogData from "../data/blogs.json";

const Home = () => {
  const [blogs, setBlogs] = useState(blogData);
  const location = useLocation();

  useEffect(() => {
    const search = location.search;
    const params = new URLSearchParams(search);
    const query = params.get("q");

    if (query === null || query === "") {
      setBlogs(blogData);
    } else {
      const lowerQuery = query.toLowerCase();

      const result = blogData.filter((blog) => {
        return (
          blog.title.toLowerCase().includes(lowerQuery) ||
          blog.author.toLowerCase().includes(lowerQuery)
        );
      });

      setBlogs(result);
    }
  }, [location.search]);

  return (
    <div className="home-page container content">
      <h1 className="hero-title" style={{ fontSize: "32px", marginBottom: "30px" }}>
        {location.search ? "Search Results" : "Blogs"}
      </h1>

      <div className="blog-list">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        ) : (
          <div className="no-blogs">
            <p>No blogs found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
