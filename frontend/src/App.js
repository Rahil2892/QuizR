import React from "react";
import './App.css';
import { Routes,Route} from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Quiz from "./components/quiz";
import Home2 from "./components/home";

function App() {
  const loggedIn = window.localStorage.getItem("loggedIn");
  console.log(loggedIn,"loginStatus");        
  return (
  <>
    <Routes>
        <Route  path="/" element={loggedIn?<Home2/>:<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<Home2/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/quiz/:id" element={<Quiz />} />
    </Routes>
  </>
  );
}

export default App;
