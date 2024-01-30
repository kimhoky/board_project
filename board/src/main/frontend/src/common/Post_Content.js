import React from "react";
import { Link, useParams } from "react-router-dom";
import "../css/content.css";


export default function Post_Content() {

const{board_id} = useParams();

  return (
    <div className="post_container">
      <div className="post_title">
        <form>
          <span>말머리</span>

          <textarea className="title" readOnly>
            오늘 팔켓몬 다 죽었다 ㅋㅋ
          </textarea>
        </form>
        <button className="block">차단하기</button>
        <span>작성자</span>
      </div>
      <div className="post_content">
        <div className="post_top">
          <form>
            <div className="dt">
              <span className="date">2024-01-08</span>
              <span className="time">00:00:00</span>

              <span className="test">댓글</span>
              <span className="recommend">추천</span>
              <span className="view">조회수</span>
            </div>
          </form>
        </div>
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
          <form>
            <textarea className="post_input" readOnly>
              3232
            </textarea>
          </form>
          <div className="gd">
            <button className="good">좋아요:0</button>
            <button className="bad">싫어요:0</button>
          </div>
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
