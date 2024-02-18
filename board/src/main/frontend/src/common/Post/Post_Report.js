import React from "react";
import { Link } from "react-router-dom";
import "../../css/content.css";

export default function Post_Report() {
  return (
    <main className="post_report_containers">
      <article className="post_report_content">
        <h1>컨텐츠 신고</h1>
        <span>신고 게시물</span>
        <div className="post_board">p/123/421(신고 게시글 번호)</div>
        <span>신고 유형</span>
        <select name="신고 유형 ">
          {" "}
          {/* 년도 listdownbox */}
          <option value="1"> 1 </option>
          <option value="2"> 2 </option>
          <option value="3"> 3 </option>
          <option value="4"> 4 </option>
          <option value="5"> 5 </option>
          <option value="6"> 6 </option>
        </select>
        <div className="report_box">박스</div>
      </article>
    </main>
  );
}
