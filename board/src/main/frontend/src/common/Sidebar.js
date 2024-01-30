import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "../context/themeProvider";
import "../css/sidebar.css";

export default function Sidebar({ board }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [themeMode, toggleTheme] = useTheme();
  const [isBookmarked, setIsBookmarked] = useState(false); //북마크

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

  /* 북마크 클릭시 노란색으로 변경 및 콘솔로그 */
  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
    console.log("북마크 클릭");
  };

  return (
    <div className="sidebar_container">
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
          <Link to="/Writing">
            <button className="writing">
              <FontAwesomeIcon icon="fa-solid fa-chalkboard" />
              <span>글쓰기</span>
            </button>
          </Link>

          <div className="board_list">
            <span>게시판 목록</span>
            <li>12345</li>
            <li>6243</li>
            <li>32132</li>
            <li>321325</li>
          </div>
          <Link to="/calendar">
            <button className="calendar_button">
              <FontAwesomeIcon icon="fa-regular fa-calendar" />

              <span>캘린더</span>
            </button>
          </Link>
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
    </div>
  );
}
