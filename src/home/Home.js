import React, { useContext } from "react";

import profile from "../assets/professional-removebg-preview.png";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import "../../src/custom.css";
import Services from "../services/Services";
import MyProjects from "../myProjects/MyProjects";
import { AuthContext } from "../firebase/AuthProvider";
import SendMail from "../senMail/SendMail";

const Home = () => {
  const { theme } = useContext(AuthContext);
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
    <div className={` ${theme&&'bg-black'}`}>
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

  
      <MyProjects/>
      <SendMail/>
    </div>
  );
};

export default Home;
