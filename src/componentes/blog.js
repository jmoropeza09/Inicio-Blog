import React from "react";
import Posts from "../data/posts";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {Posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.Titulo}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
