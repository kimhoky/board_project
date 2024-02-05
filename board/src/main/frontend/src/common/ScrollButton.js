// ScrollButton.js

import React from "react";
import PropTypes from "prop-types";
import "../css/scrollbutton.css";

export default function ScrollButton({ targetRef, handleMoveToRef }) {
  // 화면 상단으로 스크롤 이동
  const handleMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 화면 하단으로 스크롤 이동
  const handleMoveToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  // 지정된 타겟 요소로 스크롤 이동
  //   const handleMoveToTargetClass = () => {
  //     if (targetRef && targetRef.current) {
  //       // handleMoveToRef 함수에 targetRef 전달하여 스크롤 이동
  //       handleMoveToRef(targetRef);
  //     }
  //   };

  return (
    <div className="test_c">
      {/* 화면 상단으로 스크롤 이동하는 버튼 */}
      <button className="button_top_scroll" onClick={handleMoveToTop}>
        ^
      </button>
      {/* 화면 하단으로 스크롤 이동하는 버튼 */}
      <button className="button_bottom_scroll" onClick={handleMoveToBottom}>
        1
      </button>
      {/* 지정된 타겟 요소로 스크롤 이동하는 버튼
      <button
        className="button_move_to_target"
        onClick={handleMoveToTargetClass}
      >
        Move to Target
      </button> */}
    </div>
  );
}

// PropTypes 추가
ScrollButton.propTypes = {
  targetRef: PropTypes.object.isRequired,
  handleMoveToRef: PropTypes.func.isRequired,
};
