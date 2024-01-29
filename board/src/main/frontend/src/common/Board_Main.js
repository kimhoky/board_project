import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/sidebar.css";

export default function TestSidebar({ board }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
    console.log("북마크 클릭");
  };

  return (
    <div className="body">
      <div className="header_control">
        <div className="LB_button">
          {" "}
          {/*리스트 그리드 글쓰기 변경 */}
          <button className="list_button">
            list
            {/* <FontAwesomeIcon icon="fa-solid fa-list" /> */}
          </button>
          <button className="grid_button">
            grid
            {/* <FontAwesomeIcon icon="fa-solid fa-table-cells-large" /> */}
          </button>
        </div>
        <div className="billet_point">
          {" "}
          {/*말머리 */}
          <span>말머리</span>
          <button>말머리 몇개까지?</button>
          <button>일반</button>
          <button>질문</button>
          <button>정보</button>
          <button>파티</button>
        </div>
        <div className="billet_list">
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
        </div>
      </div>
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

      <div className="board_container">
        <div className="board_set">
          <Link to={"/Post"}>
            {" "}
            <div className="board_1">
              <span>말머리1</span>
              <h1>제목 1</h1>
              <p>작성자</p>
            </div>
          </Link>
          <Link to={"/board/1"}>
            {" "}
            <div className="board_1">
              <span>말머리1</span>
              <h1>제목 1</h1>
              <p>작성자</p>
            </div>
          </Link>{" "}
          <Link to={"/board/1"}>
            {" "}
            <div className="board_1">
              <span>말머리1</span>
              <h1>제목 1</h1>
              <p>작성자</p>
            </div>
          </Link>{" "}
          <Link to={"/board/1"}>
            {" "}
            <div className="board_1">
              <span>말머리1</span>
              <h1>제목 1</h1>
              <p>작성자</p>
            </div>
          </Link>
        </div>

        {/* 캘린더는 추후 api이용하자 일단 자리만 잡는걸로 */}
        <div className="calendar_container">
          <div className="calendar"> 캘린더</div>
          <div className="calendar_box">캘린더 내용을 입력해주세요</div>
        </div>
      </div>
    </div>
  );
}
