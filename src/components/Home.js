import { useState, useEffect } from "react";
import image1 from "../assets/interstellar.jpg";
import image2 from "../assets/john-wick.jpg";
import image3 from "../assets/titanic.jpg";
import "./Home.css";

function Home() {
  const images = [image1, image2, image3];

  const [currentImage, setCurrentImage] = useState(0);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMovies(data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="homepage">
      <div className="section1">
        <div className="carousel-container">
          <div className="carousel-image">
            <img src={images[currentImage]} alt= "Description"/>
          </div>
          <div className="carousel-button">
            <button className="carousel-btn" onClick={prevImage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="left-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="carousel-btn" onClick={nextImage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="right-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="sidebar">
          <div className="sidebar-content">
            <h3>Up next</h3>
            <div className="sidebar-column">
              <div className="sidebar-image">
                <img src={image2} alt="alt" />
              </div>
              <div className="sidebar-right">
                <button className="play-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="play-icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </button>
                <h3>Streaming!</h3>
                <p>Watch the trailer!!</p>
              </div>
            </div>
            <div className="sidebar-column">
              <div className="sidebar-image">
                <img src={image2} alt="alt" />
              </div>
              <div className="sidebar-right">
                <button className="play-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="play-icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </button>
                <h3>Streaming!</h3>
                <p>Watch the trailer!!</p>
              </div>
            </div>
            <div className="sidebar-column">
              <div className="sidebar-image">
                <img src={image2} alt="alt" />
              </div>
              <div className="sidebar-right">
                <button className="play-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="play-icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </button>
                <h3>Streaming!</h3>
                <p>Watch the trailer!!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="section2-container">
          <h1>Explore movies</h1>
          <div className="movie-cards">
            {movies.map((movie, index) => (
              <div className="movie-card" key={index}>
                <img src={movie.Images} alt={`Movie Poster - ${movie.title}`} />
                <h2>{movie.Title}</h2>
                <p>{movie.Genre}</p>
                <p>{movie.Director}</p>
                <button className="watch-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="btn-play-icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                  Trailer
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
