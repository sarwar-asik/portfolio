import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../pages/footer/Footer";
import Header from "../pages/header/Header";
import Navbar from "../pages/header/Navbar";
import Sidebar from "../sidebar/Sidebar";

const Main = () => {
  return (
    <div className="w-[90%] mx-auto ">
      <Sidebar />
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
