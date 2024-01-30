import React from "react";

import "../css/calendar.css";

export default function Calendar_Main() {
  return (
    <main className="calendar_container2">
      <nav className="calender_name">캘린더</nav>
      <div className="calendar_content3">
        <section className="calendar_img">캘린더</section>
        <aside className="calender_input">
          <input className="input_text" type="text" placeholder="내용입력" />
          <button className="save_button">저장</button>
          <button className="delete_button">삭제</button>
          <fieldset>
            <label>
              <input role="switch" type="checkbox" />
              <span>이미지 전환</span>
            </label>
          </fieldset>
          <button className="image_upload">이미지 업로드</button>
          {/* 이미지 업로드 icon 필요 */}
        </aside>
      </div>
    </main>
  );
}
