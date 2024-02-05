import React, { useEffect, useState } from "react";
import "../css/scrollbutton.css";

export default function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMoveToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const handleResize = () => {
    // 현재 화면의 가로 크기를 가져옴
    const windowWidth = window.innerWidth;

    // 화면의 가로 크기에 따라 동작을 변경
    if (windowWidth < 768) {
      // 화면 가로 크기가 768px 미만이면 추가 동작 수행(추후)
      console.log("화면이 좁아짐");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // 초기화 시에도 실행
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="scroll_btn_container!">
      <button
        id="scroll_btn_top"
        className={isVisible ? "show" : ""}
        onClick={handleMoveToTop}
      >
        ^
      </button>
      <button
        id="scroll_btn_bottom"
        className={isVisible ? "show" : ""}
        onClick={handleMoveToBottom}
      >
        v
      </button>
    </div>
  );
}
