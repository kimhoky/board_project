// Calendar_Main.js
import React, { useState } from "react";
import "../../css/calendar.css";
import Img_Upload from "../Img_Upload";

export default function Calendar_Main() {
  const [isToggleOn, setToggleOn] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleToggle = () => {
    setToggleOn(!isToggleOn);
  };

  const handleImageUpload = (imageData) => {
    setUploadedImage(imageData);
  };

  return (
    <main className="calendar_container2">
      <nav className="calender_name">캘린더</nav>
      <div className="calendar_content3">
        <section className="calendar_img">
          {/* 이미지 올릴시 동적으로 크기 조절 */}
          {uploadedImage && (
            <img
              src={uploadedImage}
              alt="Uploaded"
              style={{ width: "100%", height: "100%" }}
            />
          )}
          {/* 이미지 없을시 기본*/}
          {!uploadedImage && "캘린더"}
        </section>
        <aside className="calender_input">
          <input className="input_text" type="text" placeholder="내용입력" />
          <button className="save_button">저장</button>
          <button className="delete_button">삭제</button>
          {/* 토글 버튼 */}
          <fieldset>
            <label>
              <input role="switch" type="checkbox" onChange={handleToggle} />
              <span>이미지 전환</span>
            </label>
          </fieldset>

          {/* 파일 업로드 필드 */}
          {isToggleOn && <Img_Upload onImageUpload={handleImageUpload} />}
        </aside>
      </div>
    </main>
  );
}
