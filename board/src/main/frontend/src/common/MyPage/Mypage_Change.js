import Mypage_Button from "./Mypage_Button";
import BoardList from "./BoardList";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import "../../css/mypage.css";
import "../../css/mypage_change.css";

export default function MyPage() {
  const [user, setUser] = useState([]);
  const [userID, setUserID] = useState("");
  const [btnActive, setBtnActive] = useState(null);
  const toggleActive = (idx) => {
    setBtnActive(idx === btnActive ? null : idx);
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // localStorage에서 토큰 가져오기
        const token = localStorage.getItem("userToken");

        // 토큰을 서버에 전달하여 사용자 정보 가져오기
        const response = await axios.get("/api/user", {
          headers: {
            Authorization: `${token}`,
          },
        });
        setUserID(response.data);
        const userdata = await axios.get(`/user/check?User_ID=${userID}`);
        setUser(userdata.data);
        console.log(userdata.data);
      } catch (error) {
        console.error("Error fetching boards:", error);
      }
    };
    fetchUserData();
  }, [userID]);
  return (
    <main className="mypage_container">
      <nav className="mypage_nav">
        {" "}
        <Mypage_Button />
      </nav>

      <div className="mypage_content">
        <section className="mypage_user_profile">
          <article className="mypage_profile_top">
            {/* 사용자의 프로필이미지, 닉네임, bj및 스트리머 */}
            <h2>프로필</h2>
            <img src=".\assets\Rectangle.png" alt="profile icon" />
            <h3>{user.user_name}</h3>
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
      </div>
    </main>
  );
}
