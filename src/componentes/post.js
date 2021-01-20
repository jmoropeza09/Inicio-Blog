import React from "react";
import Posts from "../data/posts";
import { useParams, Redirect } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  return (
    <>
      {Posts[id - 1] ? (
        <div>
          <h1>{Posts[id - 1].Titulo}</h1>
          <p>{Posts[id - 1].texto}</p>
        </div>
      ) : (
        <Redirect to="/"/>
      )}
    </>
  );
};

export default Post;
