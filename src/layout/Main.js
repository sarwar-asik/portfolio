import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";
import Header from "../pages/header/Header";
import Navbar from "../pages/header/Navbar";
import Sidebar from "../pages/signup/sidebar/Sidebar";

const Main = () => {
  return (
    <div className="w-[95%] mx-auto ">
    
        <Sidebar/>
        <Outlet/>
     
    </div>
  );
};

export default Main;
