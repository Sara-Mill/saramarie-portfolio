import React from "react";
import JATE from "../../images/JATE.png";
import SNAPI from "../../images/SNAPI.png";
import DEAR from "../../images/DEAR.png";
import KYA from "../../images/KYA.png";
import style from "./portfolio.css";
import { FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <div>
      <h1>Portfolio </h1>
      <div className="images-container">
        <div>
          <a href="https://github.com/Sara-Mill/PWA-text-editor">
            <FaGithub color="black" size="34px" />
          </a>
          <a href="https://pwa-jate-mystic-app.herokuapp.com">
            <p class="project-links">Progressive Web Application</p>
            <img
              src={JATE}
              alt="Black background, with text editor in yellow."
              class="project-thumbnails"
            ></img>
          </a>
        </div>
        <br></br>
        <div className="images-container">
          <div>
            <a href="https://github.com/Sara-Mill/Artist-Profile">
              <FaGithub color="black" size="34px" />
            </a>
            <a href="https://pwa-jate-mystic-app.herokuapp.com">
              <p class="project-links">REST API</p>
              <img
                src={KYA}
                alt="Black background showing with list of top 5 tracks on the left, and a youtube video by the artist on the right."
                class="project-thumbnails"
              ></img>
            </a>
          </div>
          <br></br>
          <div className="images-container">
            <br></br>
            <div className="images-container">
              <div>
                <a href="https://github.com/LizBailey75/DEAR-Reader">
                  <FaGithub color="black" size="34px" />
                </a>
                <a href="https://dear-reader-22-app.herokuapp.com/">
                  <p class="project-links">Drop Everything and Read</p>
                  <img
                    src={DEAR}
                    alt="book opening up spreading light"
                    class="project-thumbnails"
                  ></img>
                </a>
              </div>
              <br></br>
            </div>
            <div>
              <a href="https://github.com/Sara-Mill/Social_Network_API_NoSQL">
                <FaGithub color="black" size="34px" />
              </a>
              <a href="https://github.com/Sara-Mill/Social_Network_API_NoSQL">
                <p class="project-links">Social Network API NoSQL</p>
                <img
                  src={SNAPI}
                  alt="Black background showing table of employees in white."
                  class="project-thumbnails"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
