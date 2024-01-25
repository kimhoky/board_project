import React, { useState } from "react";
import "../css/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

export default function Sidebar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log(`다크 모드 ${isDarkMode ? "비활성화" : "활성화"}`);
  };
  return (
    <div className={`board ${isDarkMode ? "dark-mode" : ""}`}>
      <aside className="sidebar">
        <div className="white_box">
          <div className="user">
            <FontAwesomeIcon icon={faCircle} className="icon" />
            <span>name</span>
            <button className="home">
              {/* <FontAwesomeIcon icon="fa-solid fa-house" />     아이콘 적용해야함  */}
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
                checked={isDarkMode}
              />
              <span className="toggle-text">
                {isDarkMode ? "다크 모드 활성화" : "다크 모드 비활성화"}
              </span>
              <label htmlFor="toggle" className="toggleSwitch">
                <span className="toggleButton"></span>
              </label>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
