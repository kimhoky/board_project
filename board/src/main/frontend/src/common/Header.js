import { Link } from "react-router-dom";
import "../css/header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
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
        ></input>
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <nav>
        <button>
          {" "}
          {/* 네브바 버튼 */}
          <Link to="/1">1</Link>
        </button>
        <button>
          <Link to="/2">2</Link>
        </button>
        <button>
          <Link to="/3">3</Link>
        </button>
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
