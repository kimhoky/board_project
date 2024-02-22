import React, { useState, useEffect } from "react";

import BoardList from "../Board/BoardList";
import { useTable } from "react-table";
import axios from "axios";
import "../../css/manager.css";

export default function Manager_Report() {
  const [boards, setBoards] = useState([]);
  const [isGridView, setIsGridView] = useState(false);
  const [reportData, setReportData] = useState(null); //post_report 값들

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
        <thead board="1">
          <tr>
            <th>게시글</th>
            <th>신고자</th>
            <th>신고분류</th>
            <th>내용</th>
          </tr>
        </thead>
        <hr />
        <article className="report_history2">
          <tbody>
            {boards.map((board) => (
              <React.Fragment key={board.board_ID}>
                {/* 각 행에 대한 데이터 표시 */}
                <tr>
                  <td>
                    {/* 각 열을 나타내는 클래스를 사용하여 스타일을 적용 */}
                    <div className="reporter-group">
                      <div className="reporter1">
                        {board.board_ID === reportData?.board_ID
                          ? reportData.writer_ID
                          : ""}
                        신고자
                      </div>{" "}
                      {/* */}
                      <div className="reporter2">
                        {board.board_ID === reportData?.board_ID
                          ? reportData.reportCategory
                          : ""}
                        신고분류
                      </div>
                      <div className="reporter3">
                        {board.board_ID === reportData?.board_ID
                          ? reportData.reportContent
                          : ""}
                        내용
                      </div>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </article>
      </section>
    </main>
  );
}
