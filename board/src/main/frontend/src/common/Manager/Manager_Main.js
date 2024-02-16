import React, { useState } from "react";
import Img_Upload from "../Img_Upload";
import ManagerA from "./Manage_Button";
import Manager_Report from "./Manager_Report";
import "../../css/manager.css";

export default function Manager_Main() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedTab, setSelectedTab] = useState(null);

  // handleTabClick 함수 정의
  const handleTabClick = (tabName) => {
    console.log(`Tab clicked: ${tabName}`);
    setSelectedTab(tabName);
    // 이 함수에서 탭을 클릭했을 때 수행할 작업을 정의할 수 있습니다.
    // 여기서는 콘솔에 간단한 메시지를 출력하도록 했습니다.
  };

  const handleImageUpload = (imageData) => {
    setUploadedImage(imageData);
  };

  return (
    <main className="manager_main">
      <nav className="manager_name">
        <button onClick={() => handleTabClick("boardSettings")}>
          게시판 설정
        </button>
        <button onClick={() => handleTabClick("report")}>신고</button>
        <button onClick={() => handleTabClick("headers")}>글머리</button>
        <button onClick={() => handleTabClick("prohibitedWords")}>
          금지어
        </button>
        <button onClick={() => handleTabClick("permissions")}>권한</button>
        <hr />
      </nav>
      {selectedTab === "boardSettings" && <ManagerA />}
      {selectedTab === "report" && <Manager_Report />}
    </main>
  );
}
