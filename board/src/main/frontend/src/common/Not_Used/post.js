// import React, { useState, useEffect } from "react";
// import BoardBanner from "../common/BoardBanner";
// import BoardList from "../common/BoardList";
// import axios from "axios";

// export default function Board() {
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const [boards, setBoards] = useState([]);
//   const [isGridView, setIsGridView] = useState(false);
//   const createdAt = new Date();
//   {
//     /*특정 divclass로 이동 설정 */
//   }
//   const hnadleMoveToTargetClass = () => {
//     if (targetClassRef.current) {
//       window.scrollTo({
//         top: targetClassRef.current.offsetTop,
//         behavior: "smooth",
//       });
//     }
//   };
//   const handleBookmarkClick = () => {
//     setIsBookmarked(!isBookmarked);
//     console.log("북마크 클릭");
//   };

//   const handleGridViewClick = () => {
//     setIsGridView(!isGridView);
//     console.log("그리드 뷰 클릭");
//   };

//   useEffect(() => {
//     const fetchBoards = async () => {
//       try {
//         const response = await axios.get("/board/gettable", {
//           params: { cid: 1 },
//         });
//         setBoards(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error("Error fetching boards:", error);
//       }
//     };

//     fetchBoards();
//   }, []);

//   return (
//     <main id="main" style={{ flex: "1" }}>
//       <BoardBanner
//         isBookmarked={isBookmarked}
//         handleBookmarkClick={handleBookmarkClick}
//       />
//       <BoardList
//         boards={boards}
//         isGridView={isGridView}
//         createdAt={createdAt}
//       />
//       <div className="calendar_container">
//         <div className="calendar"> 캘린더</div>
//         <div className="calendar_box">캘린더 내용을 입력해주세요</div>
//       </div>
//     </main>
//   );
// }

// /*이거 왜 있는거임? -kyw*/
// // import Sidebar from "../common/Sidebar";
// // import Board_Main from "../common/Board_Main";
// // export default function Board() {
// //   return (
// //     <main style={{ display: "flex", maxWidth: "1500px" }}>
// //       <Sidebar style={{ flex: "1" }} />
// //       <Board_Main style={{ flex: "1" }} />
// //     </main>
// //   );
// // }

/*이건 왜 있지..? */
