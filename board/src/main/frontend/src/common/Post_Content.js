import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../css/content.css";

export default function Post_Content() {
  const { board_id } = useParams();
  const [loginID, setLoginID] = useState("로그인");
  const [boardTitle, setBoardTitle] = useState("");
  const [boardContent, setBoardContent] = useState("");
  const [boards, setBoards] = useState([]);
  const { board_ID } = useParams();
  const navigate = useNavigate();
  const inputBoxRef = useRef();

  console.log(board_ID);
  const targetRef = useRef();

  //지정된 타겟 요소로 스크롤 이동
  const handleMoveToTargetClass = () => {
    if (targetRef && targetRef.current) {
      // handleMoveToRef 함수에 targetRef 전달하여 스크롤 이동
      handleMoveToRef(targetRef);
    }
  };

  const handleMoveToRef = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  {
    /*post_text로 이동 */
  }
  const [board_date, setBoard_date] = useState("");
  // board_write_date를 포맷팅하는 함수
  const formatBoardWriteDate = (boardWriteDate) => {
    const date = new Date(boardWriteDate);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    };
    return new Intl.DateTimeFormat("ko-KR", options).format(date);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("userToken");

        if (token != null) {
          const response = await axios.get("/api/user", {
            headers: {
              Authorization: `${token}`,
            },
          });

          const userID = response.data;
          setLoginID(userID);
        } else {
          setLoginID("로그인");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const encodedBoardID = encodeURIComponent(board_ID);
        const response = await axios.get(
          `/board/getboard?bid=${encodedBoardID}`
        );
        setBoards(response.data);
        if (response.data[0].board_modify_date == null) {
          console.log(response.data[0].board_write_date);
          setBoard_date(
            formatBoardWriteDate(response.data[0].board_write_date)
          );
        } else {
          console.log(response.data[0].board_modify_date);
          setBoard_date(
            formatBoardWriteDate(response.data[0].board_modify_date)
          );
        }

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching boards:", error);
      }
    };

    fetchBoards();
  }, [board_ID]); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행

  const handledelete = async () => {
    const userConfirmed = window.confirm("정말 삭제하시겠습니까?");
    const encodedBoardID = encodeURIComponent(board_ID);

    // If the user confirms, proceed with the logout
    if (userConfirmed) {
      axios
        .get(
          `/board/del?deleteboardid=${encodedBoardID}&deletewriterid=${loginID}`
        )
        .then((response) => {
          if (response.status === 200) {
            window.confirm("삭제가 완료되었습니다.");
            window.location.href = "/board";
            console.log(response.data);
          } else {
            // 서버 응답이 성공(200)이 아닌 경우, 실패 처리
            window.confirm("삭제 실패하였습니다.");
          }
          //
          //                const userConfirmed2 = window.confirm("삭제가 완료되었습니다.");
          //                if(userConfirmed2){
          //                window.location.href = "/board";
          //                }else{
          //                window.location.href = "/board";
          //                }
          // 서버로부터의 응답 처리
          console.log(response.data);
        })
        .catch((error) => {
          window.confirm("삭제 실패하였습니다.");
          // 오류 처리
          console.error("Error:", error);
        });
    }
  };
  const handleedit = async () => {
    const encodedBoardID = encodeURIComponent(board_ID);

    axios
      .get(`/board/edit?editboardid=${encodedBoardID}&editwriterid=${loginID}`)
      .then((response) => {
        if (response.status === 200) {
          //console.log(response.data);
          navigate("/Writing", { state: { data: response.data } });
        } else {
          // 서버 응답이 성공(200)이 아닌 경우, 실패 처리
          window.confirm("수정에 실패하였습니다.");
        }
        // 서버로부터의 응답 처리
      })
      .catch((error) => {
        window.confirm("수정에 실패하였습니다.");
        // 오류 처리
        console.error("Error:", error);
      });
  };

  return (
    <main className="main">
      <hr />
      {boards.map((board) => (
        <nav className="post_title">
          <form>
            <span>{board.board_tag}말머리</span>
            <textarea className="title" readOnly>
              {board.board_title}
            </textarea>
          </form>

          <button className="block">차단하기</button>
          <span>{board.writer_ID}</span>
        </nav>
      ))}
      <section className="post_content" ref={targetRef}>
        {boards.map((board) => (
          <article className="post_top">
            <form>
              <span className="date">{board_date}</span>

              <span className="comment_count">댓글:123</span>
              <span className="recommend">추천:123</span>
              <span className="view">조회수:1234</span>
            </form>
          </article>
        ))}
        <article className="post_text">
          <div className="post_button">
            <button onClick={handledelete}>삭제</button>

            <button onClick={handleedit}>수정</button>

            <Link to="1">
              <span>공유</span>
            </Link>
            <Link to="1">
              <span>신고</span>
            </Link>
          </div>
          {boards.map((board) => (
            <textarea className="post_input" readOnly>
              {board.board_content}
            </textarea>
          ))}
          {boards.map((board) => (
            <div className="gd">
              <button className="good">좋아요:{board.board_recomend}</button>
              <button className="bad">싫어요:0</button>
            </div>
          ))}
        </article>
      </section>
      <section className="comment-container">
        <hr />
        <nav className="comment-header">
          <article className="user-info">
            <img
              src={process.env.PUBLIC_URL + "/assets/Rectangle.png"}
              alt="profile icon"
            />

            <span className="nickname">닉네임</span>
          </article>
          <article className="actions">
            <span className="time">시간</span>
            <button className="edit">수정</button>
            <button className="delete">삭제</button>
            <button className="report">신고</button>
          </article>
        </nav>

        <from>
          <textarea className="comment"></textarea>
          <button className="registration">등록</button>
        </from>
      </section>
      <button
        className="button_move_to_target"
        onClick={handleMoveToTargetClass}
      >
        Move to Target
      </button>
    </main>
  );
}
