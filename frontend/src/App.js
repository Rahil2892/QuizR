import React from "react";
import './App.css';
import { Routes,Route} from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import Quiz from "./components/quiz";
import Home2 from "./components/home2";

function App() {
  return (
   <>
    <Routes>
        <Route  path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<Home2/>} />
        <Route path="/quiz" element={<Quiz/>} />
    </Routes>
  </>
  );
}

export default App;
