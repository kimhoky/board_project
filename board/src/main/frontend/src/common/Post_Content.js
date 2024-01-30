import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/content.css";

export default function Post_Content() {
  const { board_id } = useParams();
  const [loginID, setLoginID] = useState("로그인");

  const [boards, setBoards] = useState([]);
  const { board_ID } = useParams();

  console.log(board_ID);


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
            axios.get(`/board/del?deleteboardid=${encodedBoardID}&deletewriterid=${loginID}`)
              .then(response => {

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
              .catch(error => {

              window.confirm("삭제 실패하였습니다.")
                // 오류 처리
                console.error('Error:', error);
              });
        }
  };




  return (
    <div className="post_container">
      {boards.map((board) => (
        <div className="post_title">
          <form>
            <span>{board.board_tag}</span>

            <textarea className="title" readOnly>
              {board.board_title}
            </textarea>
          </form>

          <button className="block">차단하기</button>
          <span>{board.writer_ID}</span>
        </div>
      ))}
      <div className="post_content">
        {boards.map((board) => (
          <div className="post_top">
            <form>
              <div className="dt">
                <span className="date">{board.write_date}</span>


                <span className="test">댓글</span>
                <span className="recommend">추천</span>
                <span className="view">조회수</span>
              </div>
            </form>
          </div>
        ))}
        <div className="post_text">
          <div className="post_button">
            <button onClick={handledelete}>삭제</button>
            <Link to="1">
              <span>수정</span>
            </Link>
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
        </div>
      </div>

      <div className="comment-container">
        <hr></hr>
        <div className="comment-header">
          <div className="user-info">
            <img
              src="프로필 사진 경로"
              alt="프로필 사진"
              className="profile-img"
            />
            <span className="nickname">닉네임</span>
          </div>
          <div className="actions">
            <span className="time">시간</span>
            <button className="edit">수정</button>
            <button className="delete">삭제</button>
            <button className="report">신고</button>
          </div>
        </div>
        <div className="comment-content">
          <from>
            <textarea className="comment"></textarea>
            <button className="registration">등록</button>
          </from>
        </div>
      </div>
    </div>
  );
}
