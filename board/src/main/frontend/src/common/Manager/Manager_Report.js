import React, { useState, useEffect } from "react";

import BoardList from "../Board/BoardList";
import axios from "axios";
import "../../css/manager.css";

export default function Manager_Report() {
  const [boards, setBoards] = useState([]);
  const [isGridView, setIsGridView] = useState(false);

  const createdAt = new Date();

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get("/board/gettable", {
          params: { cid: 1 },
        });
        setBoards(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching boards:", error);
      }
    };

    fetchBoards();
  }, []);
  return (
    <main className="manager_report_main">
      <h1>신고</h1>
      <section className="report_select">
        <article className="report_2">
          <label for="reportAllUsers">모든 유저 신고받기</label>
          <select id="reportAllUsers" name="reportAllUsers">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </article>

        <article className="report_2">
          <label for="receiveReportNotification">신고 알림 받기</label>
          <select
            id="receiveReportNotification"
            name="receiveReportNotification"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </article>
      </section>
      <section className="report_history">
        <h1> 신고내역</h1>

        <thead>
          <tr>
            <th>게시글</th>
            <th>작성자</th>
            <th>신고자</th>
            <th>신고분류</th>
            <th>내용</th>
          </tr>
        </thead>
        <hr />
        <article className="report_history2">
          <BoardList
            boards={boards}
            isGridView={isGridView}
            createdAt={createdAt}
            showDetails={false}
          />
        </article>
      </section>
    </main>
  );
}
