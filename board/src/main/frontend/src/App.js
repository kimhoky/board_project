
import "./App.css";
//import Header from "./common/Header";
//import Footer from "./common/Footer";
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp'; // 경로가 정확한지 확인

const App = () => {
  return (
    <Router>
    <Routes>
        <Route path="/signup" element={<SignUp />} />


    </Routes>

    </Router>
  );
};

export default App;