import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
    const [User_ID, setUser_ID] = useState('');
    const [User_password, setUser_password] = useState('');
    const [User_name, setUser_name] = useState('');
    const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                const response = await axios.post('/member/save', null, { params : {
                    User_ID: User_ID,
                    User_password: User_password,
                    User_name: User_name,
                }});
                if (response.data == "false") {
                     console.log(response.data);
                     const userConfirmed = window.alert("회원가입실패!");
                     document.location.href = "/signup";
                } else if (response.data != null) {
                     console.log(response.data);
                     document.location.href = "/login"
                } else {
                     console.log("잘못된 접근");
                     console.log(response.data);
                }

            } catch (error) {
                // 오류 처리
                const userConfirmed = window.alert("회원가입실패!");
                console.error('Error submitting login:', error);
            }
        };
    return (
        <div className="login-template">

            <div className="title">
                User Signup
            </div>
            <form action="/member/save" method="post" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <input type="text" name="User_ID" value={User_ID} placeholder="email" onChange={(e) => setUser_ID(e.target.value)}/>
                    <input type="password" name="User_password" value={User_password} placeholder="password" onChange={(e) => setUser_password(e.target.value)}/>
                    <input type="text" name="User_name" value={User_name} placeholder="name" onChange={(e) => setUser_name(e.target.value)}/>
                    회원이 아니시라면 회원가입 후 로그인 해주세요.
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
