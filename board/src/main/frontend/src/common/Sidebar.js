import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "../context/themeProvider";
import "../css/sidebar.css";

export default function Sidebar({ board }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [themeMode, toggleTheme] = useTheme();

  useEffect(() => {
    // localStorage에서 저장된 값을 가져와서 설정
    const storedDarkMode = localStorage.getItem("darkMode");
    setIsDarkMode(storedDarkMode === "true");
  }, []);

  useEffect(() => {
    // 다크 모드 상태가 변경될 때마다 localStorage에 저장
    localStorage.setItem("darkMode", isDarkMode.toString());
    console.log(`다크 모드 ${isDarkMode ? "비활성화" : "활성화"}`);
  }, [isDarkMode]);

  useEffect(() => {
    // 테마 모드가 변경될 때마다 로컬 스토리지에 저장
    localStorage.setItem("themeMode", themeMode);
    console.log(`테마 모드: ${themeMode}`);
  }, [themeMode]);

  const handleToggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    toggleTheme(newDarkMode ? "dark" : "light"); // 반대의 모드를 전달
  };

  return (
    <div className="rankContainer">
      {" "}
      {/*게시판 사이드바 */}
      <aside className={`sidebar ${themeMode}`}>
        <div className="white_box">
          <div className="user">
            <FontAwesomeIcon icon={faCircle} className="icon" />
            <span>name</span>
          </div>
          <button className="home">
            <span>home</span>
          </button>
          <button className="writing">
            <FontAwesomeIcon icon="fa-solid fa-chalkboard" />
            <span>글쓰기</span>
          </button>
          <div className="board_list">
            <span>게시판 목록</span>
            <li>12345</li>
            <li>6243</li>
            <li>32132</li>
            <li>321325</li>
          </div>
          <button className="calendar">
            <FontAwesomeIcon icon="fa-regular fa-calendar" />
            <span>캘린더</span>
          </button>
          <div className="user-info">
            <span className="user-badge">동접자</span>
            <span className="user-count" id="userCount">
              25
            </span>
          </div>
          <div className="toggle-container">
            <input
              type="checkbox"
              id="toggle"
              hidden
              onChange={handleToggleDarkMode}
              checked={themeMode === "dark"}
            />
            <span className="toggle-text">
              {themeMode === "dark" ? "다크 모드 활성화" : "다크 모드 비활성화"}
            </span>
            <label htmlFor="toggle" className="toggleSwitch">
              <span className="toggleButton"></span>
            </label>
          </div>
        </div>
      </aside>
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

        <div className="board">
          <img src=".\assets\banner_img.jpg" className="banner_img" />
          <div className="banner_button">
            <Link to="/3">
              <img src=".\assets\Afreeca.png" alt="Afreeca icon" />
            </Link>
            <Link to="/3">
              <img src=".\assets\Chzzk.png" alt="Chzzk icon" />
            </Link>
            <Link to="/3">
              <img src=".\assets\Twitch.png" alt="Twitch icon" />
            </Link>{" "}
            <Link to="/3">
              <img src=".\assets\Youtube.png" alt="Youtube icon" />
            </Link>
            <button className="boomark">
              <img src=".\assets\Bookmark.png" alt="Bookmark icon" />
            </button>
            <a>1234</a>
          </div>

          <div className="board_set">
            <Link to={"/board/1"}>
              {" "}
              <div className="board_1">
                <span>말머리1</span>
                <h1>제목 1</h1>
                <p>작성자</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
