import React, { useState } from "react";
import Button from "./Button";
import "../css/manager.css";

export default function Manager_Main() {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const buttonsNameList = ["버튼1", "버튼2", "버튼3", "버튼4"];
  return (
    <main className="manager_main">
      <nav className="manager_name">
        게시판 설정
        <hr />
      </nav>

      <section className="manager_link">
        <input type="text" name="" placeholder="인기글 컷 설정" />
        <input type="text" name="twichh" placeholder="트위치 링크" />
        <input type="text" name="afreeca" placeholder="아프리카 링크" />
        <input type="text" name="chzzk_link" placeholder="치지직 링크" />
        <input type="text" name="youtube_link" placeholder="유튜브 링크" />
      </section>
      <section className="link_img">
        <img src=".\assets\Afreeca.png" alt="Afreeca icon" />
        <img src=".\assets\Chzzk.png" alt="Chzzk icon" />
        <img src=".\assets\Twitch.png" alt="Twitch icon" />
        <img src=".\assets\Youtube.png" alt="Youtube icon" />
      </section>
      <section className="manager_img">
        <a>배너 이미지</a>
        <hr />
        <img src=".\assets\banner_img.jpg" />
      </section>
      <button>저장하기</button>
    </main>
  );
}
