import React, { useState } from "react";

function Button({ name, onClick }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick(name); // 클릭 시 부모 컴포넌트에 클릭된 버튼의 이름을 전달
  };

  return (
    <div className={`button ${isActive ? "active" : ""}`} onClick={handleClick}>
      {name}
    </div>
  );
}

export default Button;
