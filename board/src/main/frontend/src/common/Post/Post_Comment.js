import React from "react";

import "../../css/content.css";

export default function Post_Comment({ content }) {
  return (
    <section className="post_comment1">
      <article className="post_comment">
        <div className="comment_user-info">
          <img
            src={process.env.PUBLIC_URL + "/assets/Rectangle.png"}
            alt="profile icon"
          />

          <span className="nickname">닉네임</span>
        </div>
        <div className="actions">
          <span className="time">시간</span>
          <button className="edit">수정</button>
          <button className="delete">삭제</button>

          <button className="report">신고</button>
        </div>
      </article>
      <textarea className="post_comment">{content}</textarea>
    </section>
  );
}
