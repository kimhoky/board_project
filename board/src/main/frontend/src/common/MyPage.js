import Mypage_Button from "./Mypage_Button";
import BoardList from "./BoardList";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../css/mypage.css";

export default function MyPage() {
  const data = [1, 2, 3];
  const [user, setUser] = useState([]);
  const [userID, setUserID] = useState("");
  const [boards, setBoards] = useState([]);
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

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        if (userID) {
          const response = await axios.get(
            `/board/search?searchText=${userID}`
          );
          setBoards(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching boards:", error);
      }
    };

    fetchBoards();
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

        <section className="mypage_user_history">
          <article className="mypage_board">
            <a>
              최근 게시글
              <hr />
            </a>
            <section className="board_set">
              {boards.slice(0, 8).map((board) => (
                <Link
                  to={`/post/${board.board_ID}`}
                  key={board.board_ID}
                  className={`board_1 `}
                >
                  <span>{board.board_tag}</span>
                  <h2>
                    {board.board_title} <p>[5]</p>
                  </h2>
                  <img
                    src="/assets/board_test_img.jpg"
                    alt="Board Image"
                    className="board-image"
                  />
                  <p>{board.writer_ID}</p>
                  <p></p>
                  <p>조회수:5</p>
                  <p>추천:5</p>
                </Link>
              ))}
            </section>
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
