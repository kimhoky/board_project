import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/board.css";

import axios from "axios";
const BoardBanner = ({ handleGridViewClick, isGridView }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [boards, setBoards] = useState([]);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
    console.log("북마크 클릭");
  };
  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get("/board/gettable", {
          params: { cid: 1 },
        });
        setBoards(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching boards:", error);
      }
    };
    fetchBoards();
  }, []);
  return (
    <main>
      <article className="header_control">
        <section className="LB_button">
          {/* 리스트 그리드 글쓰기 변경 */}
          <button
            className={`list_button ${isGridView ? "" : "active"}`}
            onClick={handleGridViewClick}
          >
            list
          </button>
          <button
            className={`grid_button ${isGridView ? "active" : ""}`}
            onClick={handleGridViewClick}
          >
            grid
          </button>
        </section>
        <section className="billet_point">
          {/* 말머리 */}
          <span>말머리</span>
          <button>말머리 몇개까지?</button>
          <button>일반</button>
          <button>질문</button>
          <button>정보</button>
          <button>파티</button>
        </section>
        <section className="billet_list">
          <span className="billet_filter">말머리 필터</span>
          <select name="billet_choice">
            {/* 말머리 listdownbox */}
            <option value="말머리1"> 말머리1 </option>
            <option value="말머리2"> 말머리2 </option>
            <option value="말머리3"> 말머리3 </option>
            <option value="말머리4"> 말머리4 </option>
            <option value="말머리5"> 말머리5 </option>
          </select>
        </section>
      </article>
      <article className="banner_img_container">
        <img src=".\assets\banner_img.jpg" className="banner_img" />
        <section className="banner_button">
          <Link to="https://www.afreecatv.com/">
            <img src=".\assets\Afreeca.png" alt="Afreeca icon" />
          </Link>
          <Link to="https://chzzk.naver.com/">
            <img src=".\assets\Chzzk.png" alt="Chzzk icon" />
          </Link>
          <Link to="https://www.twitch.tv/">
            <img src=".\assets\Twitch.png" alt="Twitch icon" />
          </Link>{" "}
          <Link to="https://www.youtube.com/">
            <img src=".\assets\Youtube.png" alt="Youtube icon" />
          </Link>
          <button
            className={`bookmark ${isBookmarked ? "active" : ""}`}
            onClick={handleBookmarkClick}
          >
            <img src=".\assets\Bookmark.png" alt="Bookmark icon" />
            <a className="bookmark_num">1234</a>
          </button>
        </section>
      </article>
    </main>
  );
};

export default BoardBanner;
