import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import Main from "./pages/Main";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Board from "./pages/Board";
import Writing from "./pages/Writing";
import Post from "./pages/Post";

import { ThemeProvider } from "./context/themeProvider";

const App = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState("");

  const handleLogin = (newToken, newUserId) => {
    setToken(newToken);
    setUserId(newUserId);
  };
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login onLogin={handleLogin} />} />
          <Route path="main" element={<Main />} />
          <Route path="board" element={<Board />} />
          <Route path="writing" element={<Writing />} />
          <Route path="post" element={<Post />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
