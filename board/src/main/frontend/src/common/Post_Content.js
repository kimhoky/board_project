
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/content.css";

export default function Post_Content() {
<<<<<<< HEAD
  const { board_id } = useParams();
=======

const [boards, setBoards] = useState([]);
const{ board_ID } = useParams();

console.log(board_ID);
useEffect(() => {
        const fetchBoards = async () => {
            try {
                const encodedBoardID = encodeURIComponent(board_ID);
                      const response = await axios.get(`/board/getboard?bid=${encodedBoardID}`);
                setBoards(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching boards:', error);
            }
        };

        fetchBoards();
    }, [board_ID]); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행
>>>>>>> 6a3c4fc8714b546c0ab7f619eaa7a98ac43c8e32

  return (
    <div className="post_container">
        {boards.map((board) => (


     <div className="post_title">
        <form>
<<<<<<< HEAD
          <span>말머리</span>
=======
          <span>{board.board_tag}</span>

>>>>>>> 6a3c4fc8714b546c0ab7f619eaa7a98ac43c8e32
          <textarea className="title" readOnly>
              {board.board_title}
          </textarea>
        </form>

        <button className="block">차단하기</button>
        <span>{board.writer_ID}</span>
      </div>

))}
      <div className="post_content">
{boards.map((board) => (
        <div className="post_top">
          <form>
            <div className="dt">
              <span className="date">{board.write_date}</span>
              <span className="time">00:00:00</span>

              <span className="test">댓글</span>
              <span className="recommend">추천</span>
              <span className="view">조회수</span>
            </div>
          </form>
       </div>
))}
        <div className="post_text">

          <div className="post_button">
            <Link to="1">
              <span>삭제</span>
            </Link>
            <Link to="1">
              <span>수정</span>
            </Link>
            <Link to="1">
              <span>공유</span>
            </Link>
            <Link to="1">
              <span>신고</span>
            </Link>
          </div>
{boards.map((board) => (
            <textarea className="post_input" readOnly>
              {board.board_content}
            </textarea>
))}
 {boards.map((board) => (
          <div className="gd">

            <button className="good">좋아요:{board.board_recomend}</button>
            <button className="bad">싫어요:0</button>

          </div>
       ))}
        </div>

      </div>


      <div className="comment-container">
        <hr></hr>
        <div className="comment-header">
          <div className="user-info">
            <img
              src="프로필 사진 경로"
              alt="프로필 사진"
              className="profile-img"
            />
            <span className="nickname">닉네임</span>
          </div>
          <div className="actions">
            <span className="time">시간</span>
            <button className="edit">수정</button>
            <button className="delete">삭제</button>
            <button className="report">신고</button>
          </div>
        </div>
        <div className="comment-content">
          <from>
            <textarea className="comment"></textarea>
            <button className="registration">등록</button>
          </from>
        </div>
      </div>

    </div>


  );
}
