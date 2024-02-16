// import React, { useState } from "react";
// import "../../css/mypage_button.css";
// import A from "./MyPage A";
// import B from "./MyPage B";

// function Button() {
//   const [btnActive, setBtnActive] = useState(null);
//   const data = ["게시글/댓글확인", "내정보 변경", "후원"];

//   const toggleActive = (idx) => {
//     setBtnActive(idx === btnActive ? null : idx);
//     console.log(idx, "클릭");
//   };

//   const renderComponent = () => {
//     switch (btnActive) {
//       case 0:
//         return <A />;
//       case 1:
//         return <B />;
//       default:
//         return null;
//     }
//   };
//   return (
//     <div className="btn_box">
//       {data.map((item, idx) => (
//         <button
//           key={idx}
//           className={`btn${idx === btnActive ? " active" : ""}`}
//           onClick={() => toggleActive(idx)}
//         >
//           {item}
//         </button>
//       ))}
//       {renderComponent()}
//     </div>
//   );
// }

// export default Button;
