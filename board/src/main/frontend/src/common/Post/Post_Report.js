import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../../css/content.css";

const fetchReporterNickname = async (writer_ID) => {
  try {
    const response = await axios.get(`/api/user/${writer_ID}`);
    return response.data.nickname;
  } catch (error) {
    console.error("Error fetching reporter's nickname:", error);
    throw error;
  }
};

export default function Post_Report() {
  const location = useLocation();
  const { board_ID, writer_ID } = location.state || {};
  const [reportType, setReportType] = useState("");
  const [reportContent, setReportContent] = useState("");
  const [reporterNickname, setReporterNickname] = useState("");
  const [reportData, setReportData] = useState(null);
  const [userID, setUserID] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("userToken");
        const response = await axios.get("/api/user", {
          headers: {
            Authorization: `${token}`,
          },
        });
        setUserID(response.data);

        // 사용자 정보를 가져온 후, 해당 사용자의 닉네임을 설정
        const userdata = await axios.get(
          `/user/check?User_ID=${response.data}`
        );
        setReporterNickname(userdata.data.nickname);

        console.log(userdata.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userID]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nickname = await fetchReporterNickname(writer_ID);
        setReporterNickname(nickname);
      } catch (error) {
        console.log("Error fetching reporter's nickname:", error);
      }
    };

    fetchData();
  }, [board_ID, writer_ID]);

  const handleReportTypeChange = (e) => {
    setReportType(e.target.value);
  };

  const handleReportContentChange = (e) => {
    setReportContent(e.target.value);
  };

  const handleReportSubmit = async () => {
    try {
      const reporterNickname = await fetchReporterNickname(writer_ID);

      console.log("신고 유형:", reportType);
      console.log("신고 내용:", reportContent);

      const response = await axios.post("/api/report", {
        board_ID,
        writer_ID,
        reportType,
        reportContent,
        reporterNickname,
      });

      if (response.status === 200) {
        console.log("신고 완료");
        setReportData({
          board_ID,
          writer_ID,
          reportType,
          reportContent,
          reporterNickname,
        });
      } else {
        console.log("신고 실패", response);
      }
    } catch (error) {
      console.log("신고 오류", error);
    }
  };

  useEffect(() => {
    if (reportData) {
      console.log("Received report data in Manager_Report:", reportData);
    }
  }, [reportData]);

  return (
    <main className="post_report_containers">
      <article className="post_report_content">
        <h1>컨텐츠 신고</h1>
        <span>신고 게시물: {board_ID}</span>
        <span>신고 닉네임: {writer_ID}</span>
        <span>신고자 닉네임: {userID}</span>
        <span className="test-label">신고 유형</span>

        <select name="신고 유형" onChange={handleReportTypeChange}>
          {/* 년도 listdownbox */}
          <option className="report_category" value="1">
            1
          </option>
          <option className="report_category" value="2">
            2
          </option>
          <option className="report_category" value="3">
            3
          </option>
          <option className="report_category" value="4">
            4
          </option>
          <option className="report_category" value="5">
            5
          </option>
        </select>

        <textarea
          className="report_box"
          placeholder="신고내용을 입력해주세요"
          onChange={handleReportContentChange}
        ></textarea>
        <button className="report_btn" onClick={handleReportSubmit}>
          제출
        </button>
      </article>
    </main>
  );
}
