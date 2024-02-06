import React from "react";
import { Link } from "react-router-dom";
import "../css/board_list.css";

const BoardList = ({ boards, isGridView, createdAt, handleGridViewClick }) => {
  return (
    <article className={`board_container ${isGridView ? "grid-view" : ""}`}>
      <section className="board_set">
        {boards.filter((board) => board.board_delete_date === null).slice(0, 8).map((board) => (
          <Link
            to={`/post/${board.board_ID}`}
            key={board.board_ID}
            className={`board_1 ${isGridView ? "grid-view" : ""}`}
          >
            <span>{board.board_tag}</span>
            <h2>
              {board.board_title} <p>[5]</p>
            </h2>
            <img
              src="/assets/board_test_img.jpg"
              alt="Board Image"
              className="board-image"
            />
            <p>{board.writer_ID}</p>
            <p>        {board.board_modify_date !== null
                         ? new Date(board.board_modify_date).toLocaleString()
                         : new Date(board.board_write_date).toLocaleString()}
</p>
            <p>조회수:5</p>
            <p>추천:5</p>
          </Link>
        ))}
      </section>
    </article>
  );
};

export default BoardList;
