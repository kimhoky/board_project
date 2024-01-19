import { Link } from "react-router-dom";
import "../css/header.css";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [searchText, setSearchText] = useState(""); //현재 검색어

  const handleInputChange = (e) => {
    //검색어 업데이트
    setSearchText(e.target.value);
  };
  const handleSearch = () => {
    //검색 이벤트
    console.log("검색어:", searchText);
  };

  const handleKeyPress = (e) => {
    //enter 감지
    if (e.key === "Enter") {
      handleSearch(); // 검색 수행
    }
  };
  return (
    <header className="mw">
      <h1>
        <Link to="/">
          <div className="logo">
            <img src="/assets/image.png" alt="로고" />
          </div>
        </Link>
      </h1>

      <div className="search">
        <input
          type="text"
          placeholder="검색할 스트리머, 게시판 제목, 내용, 사용자를 입력해주세요."
          value={searchText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        ></input>
        <button className="search_button" onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <nav>
        {" "}
        {/* 네브바 버튼 */}
        <Link to="/1">1</Link>
        <Link to="/2">2</Link>
        <Link to="/3">3</Link>
      </nav>
      <div>
        <a href="#">
          <i className="fa-solid fa-magnifying-glass"></i>
        </a>
        <a href="#">
          <i className="fa-solid fa-cart-arrow-down"></i>
        </a>
        <a href="#">
          <i className="fa-solid fa-person"></i>
        </a>
      </div>
    </header>
  );
}
