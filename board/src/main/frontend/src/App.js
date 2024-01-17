import logo from './logo.svg';
import './App.css';

import Header from "./common/Header";
import React, {useState, useEffect} from 'react';

function App() {
  const [message, setMessage]=useState([]);
  useEffect(()=>{
    fetch("/hello")
        .then((res)=>{
          return res.json();
        })
        .then((data)=>{
            setMessage(data);
        });
  },[]);
  return (
    <div className="App">
      <header className="App-header">
     <Header />
        <ul>
          {message.map((v,idx)=><li key={`${idx}-${v}`}>{v}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;