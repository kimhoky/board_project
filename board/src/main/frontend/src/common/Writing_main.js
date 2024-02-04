import React, { useState, useEffect } from "react";
import "../css/writing.css";
import axios from "axios";
import PropTypes from 'prop-types'; // 추가
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import qs from 'qs';


export default function Writing() {
  const [boardTitle, setBoardTitle] = useState("");
  const [boardContent, setBoardContent] = useState("");
  const [boardID, setBoardID] = useState(3);
  const [loginID, setLoginID] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikeThrough, setIsStrikeThrough] = useState(false);
  const [textColor, setTextColor] = useState("black");
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [alignment, setAlignment] = useState("left");
  const [lineHeight, setLineHeight] = useState(1.5);
const location = useLocation();
 const dataList = location.state && location.state.data;
  const toggleBold = () => setIsBold(!isBold);
  const toggleItalic = () => setIsItalic(!isItalic);
  const toggleUnderline = () => setIsUnderline(!isUnderline);
  const toggleStrikeThrough = () => setIsStrikeThrough(!isStrikeThrough);
const [currentDate, setCurrentDate] = useState(new Date().toISOString());





  const changeTextColor = () => {
    const newColor = prompt("Enter text color:");
    setTextColor(newColor || "black");
  };

  const changeBackgroundColor = () => {
    const newColor = prompt("Enter background color:");
    setBackgroundColor(newColor || "white");
  };

  const handleAlignmentChange = (alignmentValue) => () =>
    setAlignment(alignmentValue);

  const handleLineHeightChange = () => {
    const newLineHeight = parseFloat(prompt("Enter line height:"));
    if (!isNaN(newLineHeight) && newLineHeight > 0) {
      setLineHeight(newLineHeight);
    }
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

  const handleTitleChange = (e) => {
    setBoardTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setBoardContent(e.target.value);
  };

  const handleSubmit = async (e) => {
e.preventDefault();

    try {

const response = await axios.post("/board/save", null,  {
params: {
Board_title: boardTitle,
  Board_content: boardContent,
  Community_ID: "1",
  Writer_ID: loginID,
 // Board_write_date: new Date(),

}




});


      console.log("Server Response:", response.data);

      // 폼 제출 후에 /board로 이동
      window.location.href = "/board";
    } catch (error) {
      console.error("Error saving board data:", error.response);
    }
  };

const handleEdit = async (e) => {
e.preventDefault();

    try {

const response = await axios.post("/board/update", null,  {
params: {
Board_title: boardTitle,
  Board_content: boardContent,
  Community_ID: "1",
  Writer_ID: loginID,
  Board_ID: boardID,
 // Board_write_date: new Date(),

}




});


      console.log("Server Response:", response.data);

      // 폼 제출 후에 /board로 이동
      window.location.href = "/board";
    } catch (error) {
      console.error("Error saving board data:", error.response);
    }
  };

useEffect(() => {
    const fetchboardData = async () => {

      try {
console.log(dataList);
        if (dataList != null) {
        console.log(dataList);
         setBoardTitle(dataList[0].board_title);
         setBoardContent(dataList[0].board_content);
         setBoardID(dataList[0].board_ID);

        } else {

        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
fetchboardData();
  }, []);



  return (
    <div className="writing_container">
      <div className="writing_billet">
        {" "}
        {/*말머리 */}
        <span>말머리</span>
        <button>말머리 몇개까지?</button>
        <button>일반</button>
        <button>질문</button>
        <button>정보</button>
        <button>파티</button>
      </div>
      <hr></hr>
      {/* 제목입력 */}
      <form>
        <input
          type="text"
          name="Board_title"
          placeholder="제목을 입력해주세요"
          value={boardTitle}
          onChange={handleTitleChange}
        />

        <div className="writing_box">
          <div className="tool">
            <div className="html_toolbar">
              <button>사진</button>
              <button>동영상</button>
              <button>이모티콘</button>
              <button>구분선</button>
              <button>파일</button>
              <button>링크</button>
              <button>소스코드</button>
              <button>표</button>
              <button>수식</button>
            </div>
            <div className="html_toolbar2">
              <select name="toolbar2">
                {" "}
                {/*html boolbar2 주로 글자관련 나중에 api받아야할듯 */}
                <option value="본문"> 본문 </option>
                <option value="인용구"> 인용구 </option>
              </select>
              <select name="font_style">
                <option value="기본서체">기본서체</option>
                <option value="나눔고딕">나눔고딕</option>
                <option value="나눔스퀘어">나눔스퀘어</option>
              </select>
              <select name="font_size">
                <option value="11">11</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
              <button onClick={toggleBold}>굵게</button>
              <button onClick={toggleItalic}>기울기</button>
              <button onClick={toggleUnderline}>밑줄</button>
              <button onClick={toggleStrikeThrough}>취소선</button>
              <button onClick={changeTextColor}>글자색 변경</button>
              {/*글자색 현재 입력해야함 나중에 수정 */}
              <button onClick={changeBackgroundColor}>글자 배경색 변경</button>
              {/*글자색 현재 입력해야함 나중에 수정 */}
              <button onClick={handleAlignmentChange("left")}>좌측정렬</button>
              <button onClick={handleAlignmentChange("center")}>
                가운데정렬
              </button>
              <button onClick={handleAlignmentChange("right")}>우측정렬</button>
              <button onClick={handleLineHeightChange}>줄간격</button>
            </div>
          </div>

          <textarea
            className={`writing_text ${isBold ? "bold" : ""} ${
              isItalic ? "italic" : ""
            } ${isUnderline ? "underline" : ""} ${
              isStrikeThrough ? "strikethrough" : ""
            }`}
            style={{
              color: textColor,
              backgroundColor,
              textAlign: alignment,
              lineHeight: `${lineHeight}em`,
            }}
            name="Board_content"
            placeholder="내용입력"
            value={boardContent}
            onChange={handleContentChange}
          ></textarea>

           {dataList ? ( // dataList가 null이 아닌 경우
                    <button type="submit" className="edit" onClick={handleEdit}>
                      수정
                    </button>
                  ) : ( // dataList가 null인 경우
                    <button type="submit" className="registration" onClick={handleSubmit}>
                      등록
                    </button>
                      )}
        </div>
      </form>
    </div>
  );
}
