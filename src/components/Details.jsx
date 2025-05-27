import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs";
import "./Details.css";

function Details() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    // ดึงข้อมูล
    const result = blogs.find((item) => item.id === parseInt(id));
    setTitle(result.title);
    setImage(result.image_url);
    setContent(result.content);
    setAuthor(result.author);
  }, [id]);

  return (
    <div className="container">
      <h2 className="title">บทความ : {title}</h2>
      <img src={image} alt={title} className="blogs-image" />
      <div className="blog-detail">
        <strong>ผู้เขียน : {author}</strong>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Details;
