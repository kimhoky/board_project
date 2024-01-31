import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../css/board.css";

import axios from "axios";
export default function TestSidebar({ board }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [boards, setBoards] = useState([]);
  const [isGridView, setIsGridView] = useState(false); // grid 클릭시
  const createdAt = new Date(); //현재시간 불러옴 나중에 db랑 연결
  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
    console.log("북마크 클릭");
  };
  const handleGridViewClick = () => {
    setIsGridView(!isGridView);
    console.log("그리드 뷰 클릭");
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
  }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행

  // boards 배열을 사용하여 UI를 렌더링하는 로직

  return (
    <main id="main">
      <article className="header_control">
        <section className="LB_button">
          {" "}
          {/*리스트 그리드 글쓰기 변경 */}
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
          {" "}
          {/*말머리 */}
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
            {" "}
            {/* 말머리 listdownbox */}
            <option value="말머리1"> 말머리1 </option>
            <option value="말머리2"> 말머리2 </option>
            <option value="말머리3"> 말머리3 </option>
            <option value="말머리4"> 말머리4 </option>
            <option value="말머리5"> 말머리5 </option>
          </select>
        </section>
      </article>
      {/* 배너 이미지, 배너 버튼  */}
      <div className="banner_img_container">
        <img src=".\assets\banner_img.jpg" className="banner_img" />
        <div className="banner_button">
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
        </div>
      </div>

      <div className={`board_container ${isGridView ? "grid-view" : ""}`}>
        <div className="board_set">
          {boards.slice(0, 8).map((board) => (
            <Link
              to={`/post/${board.board_ID}`}
              key={board.board_ID}
              className={`board_1 ${isGridView ? "grid-view" : ""}`}
            >
              <span>{board.board_tag}</span>
              <h2>
                {board.board_title} <p>[5]</p>
              </h2>

              {/* <img src={board.imageSrc} alt="list 게시판 이미지" /> */}
              <img
                src="/assets/board_test_img.jpg"
                alt="Board Image"
                className="board-image"
              />

              <p>{board.writer_ID}</p>
              <p> {new Date(createdAt).toLocaleString()}</p>
              {/*작성시간 */}
              <p>조회수:5</p>
              <p>추천:5</p>
            </Link>
          ))}
        </div>

        {/* 캘린더는 추후 api이용하자 일단 자리만 잡는걸로 */}
        <div className="calendar_container">
          <div className="calendar"> 캘린더</div>
          <div className="calendar_box">캘린더 내용을 입력해주세요</div>
        </div>
      </div>
    </main>
  );
}
{
  /* <FontAwesomeIcon icon="fa-solid fa-list" /> */
  {
    /* <FontAwesomeIcon icon="fa-solid fa-table-cells-large" /> */
  }
}
{
  /*시간 조회수 추천*/
}
