import logo from "./logo.svg";
import "./App.css";

import Header from "./common/Header";
import Footer from "./common/Footer";
import React, { useState, useEffect } from "react";

//function App() {
//  const [message, setMessage]=useState([]);
//  useEffect(()=>{
//    fetch("/hello")
//        .then((res)=>{
//          return res.json();
//        })
//        .then((data)=>{
//            setMessage(data);
//        });
//  },[]);
function App() {
  let [movieList, setMovieList] = useState([]);
  let [jsonData, setjsonData] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <Footer />
    </div>
  );
}

export default App;
