import React, { useState, useEffect } from "react";
import BoardBanner from "../common/Board/BoardBanner";
import BoardList from "../common/Board/BoardList";
import Sidebar from "../common/Sidebar";
import axios from "axios";
import "../common/Calendar/Calendar";
import Calendar from "../common/Calendar/Calendar";

export default function Board() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [boards, setBoards] = useState([]);
  const [isGridView, setIsGridView] = useState(false);

  const createdAt = new Date();

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
    console.log("북마크 클릭");
  };

  const handleGridViewClick = () => {
    setIsGridView(!isGridView);
    console.log("그리드 뷰 클릭");
  };

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get("/board/gettable", {
          params: { cid: 1 },
        });
        setBoards(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching boards:", error);
      }
    };

    fetchBoards();
  }, []);

  return (
    <main style={{ display: "flex", maxWidth: "1500px" }}>
      <Sidebar style={{ flex: "0 0 auto" }} /> {/* 사이드바 */}
      <div style={{ flex: "1", display: "flex", flexDirection: "row" }}>
        <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
          <BoardBanner
            isBookmarked={isBookmarked}
            handleBookmarkClick={handleBookmarkClick}
            handleGridViewClick={handleGridViewClick}
          />
          <div style={{ display: "flex", flexDirection: "row", flex: "1" }}>
            <BoardList
              boards={boards}
              isGridView={isGridView}
              createdAt={createdAt}
              showDetails={true}
            />
            <Calendar />
          </div>
        </div>
      </div>
    </main>
  );
}
