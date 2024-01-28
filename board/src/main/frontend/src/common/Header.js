import { Link } from "react-router-dom";
import "../css/header.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [loginID, setLoginID] = useState("");

  const [searchText, setSearchText] = useState(""); //현재 검색어

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
          const token = localStorage.getItem('userToken');
          console.log(token);

          if (token != null) {
            // 토큰을 서버에 전달하여 사용자 정보 가져오기
            const response = await axios.get('/api/user', {
              headers: {
                Authorization: `${ token }`,
              },
            });
            console.log('Server Response:', response.data.username);


            // 사용자 아이디 추출 및 상태 업데이트
            const userID = response.data.username;
            console.log(userID);
            setLoginID(userID);
          }else {
                   setLoginID("로그인");
                   }
        }
        catch (error) {
          // 에러 처리
          console.error('Error fetching user data:', error);
        }
      };
      // fetchUserData 함수 호출
          fetchUserData();
        }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행


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
        <Link className="로그인" to="/login">{ loginID }</Link>
        <Link to="/2">2</Link>
        <Link to="/3">3</Link>
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