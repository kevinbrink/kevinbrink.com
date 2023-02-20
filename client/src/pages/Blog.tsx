import { createElement, Fragment, useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const refreshBlogs = async () => {
      console.log("", process.env);
      // const response = await fetch(`${process.env.API_ENDPOINT}/api/blogs`);
      const response = await fetch(`http://localhost:3000/api/blogs`);
      const data = await response.json();
      setBlogs(data);
    };
    refreshBlogs();
  }, []);

  return (
    <Fragment>
      {blogs.map((blog) => {
        return (
          <Fragment>
            <h1>BLOG: {blog.subtitle}</h1>
            <p>{blog.body}</p>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Blog;