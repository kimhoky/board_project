import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../css/content.css";

export default function Post_Report() {
  const location = useLocation();
  const { board_ID, writer_ID } = location.state || {};

  useEffect(() => {
    // 여기서 board_ID와 writer_ID를 사용하여 필요한 작업을 수행
    console.log("board_ID:", board_ID);
    console.log("writer_ID:", writer_ID);
  }, [board_ID, writer_ID]);
  return (
    <main className="post_report_containers">
      <article className="post_report_content">
        <h1>컨텐츠 신고</h1>
        <span>신고 게시물: {board_ID}</span>
        <span>신고 닉네임: {writer_ID}</span>

        <span className="test-label">신고 유형</span>
        <select name="신고 유형 ">
          {/* 년도 listdownbox */}
          <option value="1"> 1 </option>
          <option value="2"> 2 </option>
          <option value="3"> 3 </option>
          <option value="4"> 4 </option>
          <option value="5"> 5 </option>
          <option value="6"> 6 </option>
        </select>

        <textarea
          className="report_box"
          placeholder="신고내용을 입력해주세요"
        ></textarea>
        <button className="report_btn">제출</button>
      </article>
    </main>
  );
}
