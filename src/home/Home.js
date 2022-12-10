import React from "react";
import { Outlet } from "react-router-dom";
import Project from "../pages/admin/AddProject";
import Footer from "../pages/footer/Footer";
import Navbar from "../pages/header/Navbar";
import Login from "../pages/login/Login";
import profile from "../assets/professional-removebg-preview.png";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import "../../src/custom.css";
import Services from "../services/Services";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "Frontend Developer",
      "MERN Stack",
      "React Developer",
    ],
    loop: 100,
    delaySpeed: 2000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  

  return (
    <div className="bg-blac sm:ml-[30% lg:ml-[10%">
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-[50px]">
          <figure className="sm:hidden hidden lg:flex md:flex">
            <img
              src={profile}
              className="max-w-sm rounded-[100%] fonts "
              alt="sarwar-hossain"
            />
          </figure>
          <div className="px-[10%] ">
            <h1 className="text-5xl font-bold fonts">SARWAR HOSSAIN</h1>

            <p className="py-6 fonts font-semibold text-2xl">{text}</p>
            

            <button className="buttons">
              <a href="https://drive.google.com/file/d/1j1D-pT8J5klHsF-SeSOyD1DkUF45kg0T/view?usp=sharing">
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
      <Services />
      {/* <Project /> */}
    </div>
  );
};

export default Home;
