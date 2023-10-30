import React from "react";
import "./Blog.css";
import image1 from "../assets/interstellar.jpg";
import image2 from "../assets/john-wick.jpg";
import image3 from "../assets/titanic.jpg";
import { Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    image: image1,
    title: "Another blog title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    image: image2,
    title: "Another blog title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: image3,
    title: "Another blog title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    image: image1,
    title: "Another blog title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    image: image2,
    title: "Another blog title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    image: image3,
    title: "Another blog title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 7,
    image: image1,
    title: "Another blog title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    image: image2,
    title: "Another blog title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function Blog() {
  return (
    <div className="blogpage">
      <div className="blog-cards">
        {blogData.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-image">
              <img src={blog.image} alt="blog-pic" />
            </div>
            <div className="blog-heading">
              <h3>{blog.title}</h3>
            </div>
            <div className="blog-paragh">
              <p>{blog.content}</p>
            </div>
            <div className="blog-link">
              <Link to="/">Read More</Link>
              <div className="blog-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="share-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
