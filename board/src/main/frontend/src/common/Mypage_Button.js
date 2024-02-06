import React, { useState } from "react";
import "../css/mypage_button.css";

function Button() {
  const [btnActive, setBtnActive] = useState(null);
  const data = ["게시글/댓글확인", "내정보 변경", "후원"];

  const toggleActive = (idx) => {
    setBtnActive(idx === btnActive ? null : idx);
    console.log(idx, "클릭");
  };
  return (
    <div className="btn_box">
      {data.map((item, idx) => (
        <button
          key={idx}
          className={`btn${idx === btnActive ? " active" : ""}`}
          onClick={() => toggleActive(idx)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Button;
