import React, { useState } from 'react';
import axios from 'axios';
const SignUp = () => {
  const [userData, setUserData] = useState({
    User_id: '',
    User_password: '',
    User_name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

const handleSignUp = async (e) => {
  e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

  try {
    const response = await axios.post(
      'http://localhost:8080/api/member/save',
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    console.log(response); // 전체 응답 객체 확인

    if (response.data) {
      console.log(response.data);
    } else {
      console.error('응답에 data 속성이 없습니다.');
    }

    // 성공 시 리다이렉트 또는 다른 작업 수행
    // 예: 리다이렉트
    window.location.href = '/success'; // success 페이지로 리다이렉트
  } catch (error) {
    console.error('회원 가입 실패:', error.response.data);
    alert('회원 가입에 실패했습니다. 다시 시도해주세요.');
  }
};

  return (
    <div>
      <h2>회원 가입</h2>
      <form action="/api/member/save" method="post">
        <label>Email:</label>
        <input type="text" name="User_id" value={userData.User_id} onChange={handleChange} />
        <br />
        <label>비밀번호:</label>
        <input type="password" name="User_password" value={userData.User_password} onChange={handleChange} />
        <br />
        <label>이름:</label>
        <input type="text" name="User_name" value={userData.User_name} onChange={handleChange} />
        <br />
          <input type="submit" value="회원가입"/>
        <button type="button" onClick={handleSignUp}>가입하기</button>
      </form>
    </div>
  );
};
export default SignUp;
