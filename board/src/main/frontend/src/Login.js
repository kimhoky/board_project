import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
    const [User_ID, setUser_ID] = useState('');
    const [User_password, setUser_password] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/member/login', null, { params : {
                User_ID: User_ID,
                User_password: User_password
            }});
            const token = response.data.token;
                  onLogin(token, User_ID);
            if (response.data == false) {
                 console.log(response.data);
                 document.location.href = "/login";
            } else if (response.data != null) {
                 console.log(response.data);
                 document.location.href = localStorage.getItem('lastVisitedPath');

                 localStorage.setItem('userToken', response.data);

                                 // onLogin 함수 호출 (부모 컴포넌트에서 전달받은 콜백 함수)
                                 onLogin(token, User_ID);
            } else {
                 console.log("잘못된 접근");
                 console.log(response.data);
            }

        } catch (error) {
            // 오류 처리
            console.error('Error submitting login:', error);
        }
    };

    return (
            <div>
                <h1>로그인하기</h1>
                <form action="/member/login" method="post" onSubmit={handleSubmit}>
                    <div>
                        <label>로그인 ID</label>
                        <input type="text" name="User_ID" value={User_ID} onChange={(e) => setUser_ID(e.target.value)} />
                    </div>
                    <div>
                        <label>비밀번호</label>
                        <input type="password" name="User_password" value={User_password} onChange={(e) => setUser_password(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit">전송</button>
                    </div>
                </form>
            </div>
        );
}

export default Login;