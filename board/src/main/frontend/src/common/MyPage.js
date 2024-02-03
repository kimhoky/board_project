import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/mypage.css";

export default function MyPage() {
  const data = [1, 2, 3];
  const [user, setUser] = useState([]);
  const { toUserID } = useParams();
  const [btnActive, setBtnActive] = useState(null);
  const toggleActive = (idx) => {
    setBtnActive(idx === btnActive ? null : idx);
  };
  useEffect(() => {
    const fetchUserData = async () => {
        try {
            console.log("toUserID " + toUserID);
            const response = await axios.get(`/user/check?User_ID=${toUserID}`);
            setUser(response.data);
            console.log(response.data);
        }catch (error) {
            console.error("Error fetching boards:", error);
        }
    }
    fetchUserData();
  }, [toUserID]);
  return (
    <main className="mypage_container">
      <nav className="mypage_nav">
        <h2>{user.user_name}</h2>
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
