import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {


    return (
        <div className="login-template">

            <div className="title">
                User Signup
            </div>
            <form action="/member/save" method="post">
                <div className="input-wrapper">
                    <input type="text" name="User_id" placeholder="email" />
                    <input type="password" name="User_password" placeholder="password" />
                    <input type="text" name="User_name" placeholder="name" />
                    회원이 아니시라면 회원가입 후 로그인 해주세요.
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
