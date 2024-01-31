import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import Main from "./pages/Main";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Board from "./pages/Board";
import Writing from "./pages/Writing";
import Post from "./pages/Post";
import Calendar from "./pages/Calendar";

import { ThemeProvider } from "./context/themeProvider";

function App() {
  const location = useLocation();

  useEffect(() => {
    // 페이지 이동 시 localStorage에 현재 주소를 저장
    if (location.pathname != "/login") {
      localStorage.setItem("lastVisitedPath", location.pathname);
    }
  }, [location.pathname]);

  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState("");

  const handleLogin = (newToken, newUserId) => {
    setToken(newToken);
    setUserId(newUserId);
  };
  return (
    <div>
      <Header />
      <ThemeProvider>
        <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login onLogin={handleLogin} />} />
          <Route path="" element={<Main />} />
          <Route path="board" element={<Board />} />
          <Route path="writing" element={<Writing />} />
          <Route path="post" element={<Post />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="/post/:board_ID" element={<Post />} />
        </Routes>
      </ThemeProvider>
      <Footer />
    </div>
  );
}

export default App;
