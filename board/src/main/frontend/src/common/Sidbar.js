import React, { useState } from "react";
import { Link } from "react-router-dom"; // react-router-dom에서 Link import
import "../css/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "../context/themeProvider";

export default function Sidebar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [themeMode, toggleTheme] = useTheme(); // themeMode, toggleTheme 추가

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme(); // 테마 전환 함수 호출
    console.log(`다크 모드 ${isDarkMode ? "비활성화" : "활성화"}`);
  };
  return (
    <div className="rankContainer">
      <aside className="sidebar">
        {" "}
        {/*사이드바*/}
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
      <main className="body">
        <header className="header">
          <h1>2023 스트리머 랭킹</h1>
          <div className="stats">{/* 통계 박스 */}</div>
        </header>

        <div className="tableContainer">
          <table className="ranking-table-header">
            <thead>
              <tr>
                <th>순위</th>
                <th>아바타</th>
                <th>이름</th>
                <th>점수</th>
              </tr>
            </thead>
          </table>
          <div className="tableScroll">
            <table className="ranking-table">
              <tbody></tbody>
            </table>
          </div>
        </div>
        {/* ... */}
      </main>
    </div>
  );
}
