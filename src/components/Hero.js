import React from "react";
import { Link } from "react-router-dom";

import "./Hero.css";
import image1 from "../assets/image.webp";

function Hero() {
  return (
    <>
    <div className="hero-page">
      <div className="header">
        <nav className="container">
          <h1>
            <span className="purple-text">Cine</span>
            <span className="black-text">Verse</span>
          </h1>
          <ul className="item">
            <li>
          <Link to="/login">Login</Link>
        </li>
          </ul>  
        </nav>
      </div>

      <div className="section">
        <div className="left-section">
          <h1 className="heading">Track Your Show Automatically</h1>
          <p>
            with CineVerse you can track your favourite movies automatically, so
            you never loose track of your movies show again.🍿
          </p>
          <div className="input">
            <div className="search-bar">
              <input type="text" placeholder="Enter email address" />
            </div>
            <button>Start Tracking</button>
          </div>
        </div>
        <div className="right-section">
          <img src={image1} alt="Image1" />
        </div>
      </div>
      <div className="footer">
        <p>Copyright 2023. All rights reserved - Designed by Aishwarya Mehar</p>
      </div>
      </div>
    </>
  );
}
export default Hero;
