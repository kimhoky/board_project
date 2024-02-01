import React, { useState } from "react";
import "../css/mypage.css";

export default function MyPage() {
  const data = [1, 2, 3];
  const [btnActive, setBtnActive] = useState(null);
  const toggleActive = (idx) => {
    setBtnActive(idx === btnActive ? null : idx);
  };
  return (
    <main className="mypage_container">
      <nav className="mypage_nav">
        <h2>내정보 설정</h2>
        {data.map((item, idx) => (
          <button
            key={idx}
            className={`btn${idx === btnActive ? " active" : ""}`}
            onClick={() => toggleActive(idx)}
          >
            {item}
          </button>
        ))}
        {/* 임시용임 */}
      </nav>

      <select className="mypage_user_history">
        <article className="mypage_board">
          <a>
            최근 게시글
            <hr />
          </a>
          <button>게시글</button>
          <button>게시글</button>
          <button>게시글</button>
        </article>
        <article className="mypage_comment">
          <a>
            최신 댓글
            <hr />
          </a>
          <button>게시글</button>
          <button>게시글</button>
          <button>게시글</button>
        </article>
        <button>더보기</button>
      </select>
    </main>
  );
}
