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
        <Link>
          <article className="manger_banner">배너이미지</article>
        </Link>
      </section>
    </main>
  );
}
