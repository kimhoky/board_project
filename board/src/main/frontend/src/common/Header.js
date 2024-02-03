import { Link } from "react-router-dom";
import "../css/header.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import BookMark from "./BookMark";

export default function Header() {
  const [loginID, setLoginID] = useState("로그인");

  const [searchText, setSearchText] = useState(""); //현재 검색어

  const [dynamicPath, setDynamicPath] = useState("/login");

  const [mypage, setMypage] = useState("");

  const [mypagePath, setMypagePath] = useState("");

  const [dynamicEvent, setDynamicEvent] = useState();

  const handleInputChange = (e) => {
    //검색어 업데이트
    setSearchText(e.target.value);
  };
  const handleSearch = () => {
    //  axios.get(`/board/search?searchText=${searchText}`)
    //          .then(response => {
    //              // 성공적으로 서버에서 응답을 받았을 때의 로직
    //              console.log("검색 결과:", response.data);
    //          })
    //          .catch(error => {
    //              // 에러 처리
    //              console.error("에러 발생:", error);
    //          });

    axios
      .get(`/youtube?keyword=${searchText}`)
      .then((response) => {
        // 성공적으로 서버에서 응답을 받았을 때의 로직
        console.log("검색 결과:", response.data);
      })
      .catch((error) => {
        // 에러 처리
        console.error("에러 발생:", error);
      });
    // 검색 이벤트
    console.log("검색어:", searchText);
  };

  const handleKeyPress = (e) => {
    //enter 감지
    if (e.key === "Enter") {
      handleSearch(); // 검색 수행
    }
  };
  useEffect(() => {
    // useEffect 내에서 async 함수를 사용하기 위한 별도의 함수
    const fetchUserData = async () => {
      try {
        // localStorage에서 토큰 가져오기
        const token = localStorage.getItem("userToken");
        console.log(token);

        if (token != null) {
          // 토큰을 서버에 전달하여 사용자 정보 가져오기
          const response = await axios.get("/api/user", {
            headers: {
              Authorization: `${token}`,
            },
          });
          console.log("Server Response:", response.data);

          // 사용자 아이디 추출 및 상태 업데이트
          const userID = response.data;
          console.log("userID" + userID);
          setLoginID(userID);
          setDynamicPath();
          setMypage("마이페이지");
          setMypagePath(`/MyPage/${userID}`);

          console.log("dksgl" + `/MyPage/${loginID}`);

          // 토큰이 있을 때만 로그아웃 이벤트를 설정
          setDynamicEvent(() => handleLogout);
        }
      } catch (error) {
        // 에러 처리
        console.error("Error fetching user data:", error);
      }
    };
    // fetchUserData 함수 호출
    fetchUserData();
  }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행

  const handleLogout = async () => {
    const userConfirmed = window.confirm("로그아웃 하시겠습니까?");
    // If the user confirms, proceed with the logout
    if (userConfirmed) {
      try {
        // 클라이언트에서 필요한 로그아웃 처리 (예: 로컬 스토리지에서 토큰 삭제 등)
        localStorage.removeItem("userToken");

        // 서버에 로그아웃 요청을 보냄
        await axios.post("/user/logout");
        if (localStorage.getItem("lastVisitedPath") === `/MyPage/${loginID}`) {
                      document.location.href = "/";
        }
        document.location.href = localStorage.getItem("lastVisitedPath");
      } catch (error) {
        console.error("Error during logout:", error);
      }
    }
  };

  return (
    <header className="mw">
      <h1>
        <Link to="/">
          <div className="logo">
            <img src="/assets/image.png" alt="로고" />
          </div>
        </Link>
      </h1>

      <div className="search">
        <input
          type="text"
          placeholder="검색할 스트리머, 게시판 제목, 내용, 사용자를 입력해주세요."
          value={searchText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        ></input>
        <button className="search_button" onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <nav>
        {" "}
        {/* 네브바 버튼 */}
        <Link className="로그인" to={dynamicPath} onClick={dynamicEvent}>
          {loginID}
        </Link>
        <Link to={mypagePath} className="마이페이지">{mypage}</Link>
        <Link to="/board">게시판</Link>
        <button className="header_bookmark">
          구독 게시판 ▼
          <BookMark />
        </button>
      </nav>
      <div>
        <a href="#">
          <i className="fa-solid fa-magnifying-glass"></i>
        </a>
        <a href="#">
          <i className="fa-solid fa-cart-arrow-down"></i>
        </a>
        <a href="#">
          <i className="fa-solid fa-person"></i>
        </a>
      </div>
    </header>
  );
}
