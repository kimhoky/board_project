import Mypage_Button from "./Mypage_Button";
import BoardList from "./BoardList";
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
        <Mypage_Button />
      </nav>

      <div className="mypage_content">
        <section className="mypage_user_profile">
          <article className="mypage_profile_top">
            {/* 사용자의 프로필이미지, 닉네임, bj및 스트리머 */}
            <h2>프로필</h2>
            <img src=".\assets\Rectangle.png" alt="profile icon" />
            <h3>이름</h3>
            <a>아프리카 tv bj</a>
          </article>
          <article className="mypage_profile_bottom">
            <div className="profile_number">
              <h3>21</h3>

              <h3>323</h3>

              <h3>323</h3>
            </div>
            <div className="profile_number2">
              <h3>즐겨찾기 수</h3>
              <a>게시글</a>
              <a>댓글수</a>
            </div>
            <button>새 프로필 사진 업로드</button>
          </article>
        </section>
        <div className="vertical"></div>

        <section className="mypage_user_history">
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
            <button>더보기</button>
          </article>
        </section>
      </div>
    </main>
  );
}
