
import "./App.css";
import Add2Component from "./add_2";
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp'; // 경로가 정확한지 확인
import Login from './Login'; // 경로가 정확한지 확인

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add2" element={<Add2Component />} />
        </Routes>
    </Router>
  );
};

export default App;
