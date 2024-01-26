import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "../context/themeProvider";
import "../css/sidebar.css";

export default function Sidebar() {
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
      </main>
    </div>
  );
}
