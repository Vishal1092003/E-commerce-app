import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import DashBoard from "./pages/Dashboard"
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState } from "react";
import Signup from "./pages/Signup";

function App() {
    const[LogedIn,setLogedIn]=useState(false);
  return (
  <div className="w-100% h-100% bg-richblack-900 flex flex-col">
    <Navbar 
      LogedIn={LogedIn}
      setLogedIn={setLogedIn}
    />
       
    <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login setLogedIn={setLogedIn} />}/>
         <Route path="/signup" element={<Signup setLogedIn={setLogedIn} />}/>
       <Route path="/dashboard" element={<DashBoard/>}/>
    </Routes>
     
   
  </div>
  )}


export default App;
