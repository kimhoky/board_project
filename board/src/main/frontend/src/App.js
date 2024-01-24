import "./App.css";
import Add2Component from "./add_2";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Main from "./pages/Main";
import Header from "./common/Header";
import Footer from "./common/Footer";

const App = () => {
  return (
    <Router>
      <Header /> {/* 헤더 컴포넌트 추가 */}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      <Footer /> {/* 푸터 컴포넌트 추가 */}
    </Router>
  );
};

export default App;
