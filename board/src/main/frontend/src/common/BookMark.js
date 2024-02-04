import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

export default function BookMark() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleBookmarkClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <main>
      <section className={`bookmark_container ${isExpanded ? "expanded" : ""}`}>
        <Link to={"/1"}>
          <img src=".\assets\banner_img.jpg" className="bookmark_image" />
        </Link>
        <Link to={"/1"}>
          <img src=".\assets\banner_img.jpg" className="bookmark_image" />
        </Link>
        <Link to={"/1"}>
          <img src=".\assets\banner_img.jpg" className="bookmark_image" />
        </Link>
        <Link to={"/1"}>
          <img src=".\assets\banner_img.jpg" className="bookmark_image" />
        </Link>
        <Link to={"/1"}>
          <img src=".\assets\banner_img.jpg" className="bookmark_image" />
        </Link>
      </section>
    </main>
  );
}
