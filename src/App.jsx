import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./styles/HomePageNav.css";


function HomePageNav() {
  return (
    <ul className="NavulList">
      <li className="NavList">
        <Link to="/article">About</Link>
      </li>
      <li className="NavList">
        <a
          href="https://github.com/Junho-eum/Baseball_Analytics/blob/main/KBO_analytics_draft3.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </li>
    </ul>
  );
}

export default HomePageNav;
