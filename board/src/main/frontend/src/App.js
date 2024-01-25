import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Main from "./pages/Main";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Board from "./pages/Board";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/Board" element={<Board />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
