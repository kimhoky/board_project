import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Post_Content from "../common/Post/Post_Content";
import Post_Report from "../common/Post/Post_Report";

export default function Post() {
  const { board_ID } = useParams();

  return (
    <main style={{ display: "flex", maxWidth: "1500px" }}>
      <Sidebar />
      <Post_Content board_ID={board_ID} />
    </main>
  );
}
