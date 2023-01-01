import React from "react";
import Fade from "react-reveal/Fade";

import {
  FaFacebook,
  FaFacebookMessenger,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";
import profile from "../../assets/professional.png";

const About = () => {
  const [text1] = useTypewriter({
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

  const [text2] = useTypewriter({
    words: [
      "Web Developer",
      "Frontend Developer",
      "MERN Stack",
      "React Developer",
    ],
    loop: 500,
    delaySpeed: 2000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="max-w-[95%] mx-auto my-[30px]">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row" style={{overflow: 'hidden'}}>
            <Fade left>
            <figure className="w-[50%]">
            <img src={profile} className="rounded-lg shadow-2xl" alt="" />
          </figure>

            </Fade>
            <Fade right>
            <div className="w-[50%]">
            <h1 className="text-5xl font-bold  fonts">SARWAR HOSSAIN</h1>
            <h1 className="text-3xl font-semi-bold normal h-[60px] ">
              {text1}
            </h1>
            <p className="py-6 normal ">
              I am a front-end developer . I have created 30 + project with my
              frontend skills . I am ready to make your business , personal and
              official .
            </p>
            <p className="flex gap-3  ">
              <a href="." className="bg-info p-2 text-slate-50">
                {" "}
                <FaFacebook />
              </a>
              <a href="." className="bg-blue-500 p-2 text-slate-50">
                {" "}
                <FaLinkedinIn />
              </a>
              <a href="." className="bg-black text-slate-100 p-2 ">
                {" "}
                <FaGithub />
              </a>
              <a href="." className="bg-info bg-pink-500 p-2 text-slate-50">
                {" "}
                <FaFacebookMessenger />
              </a>
            </p>
            <h1 className="text-3xl headings"> My SKills </h1>
            <p className="grid grid-cols-4 gap-2 normal ">
              <button className="border-double border-2 border-orange-500  text-sm py-[8px] ">
                {" "}
                HTML
              </button>
              <button className="border-double border-2 border-sky-600  text-sm py-[8px]">
                {" "}
                CSS
              </button>
              <button className="border-double border-2 border-yellow-500  text-sm py-[8px]">
                {" "}
                JavaScript
              </button>
              <button className="border-double border-2 border-blue-500  text-sm py-[8px]">
                {" "}
                React
              </button>
              <button className="border-double border-2 border-green-500  text-sm py-[8px]">
                {" "}
                MongoDB
              </button>
              <button className="border-double border-2 border-sky-400  text-sm py-[8px]">
                {" "}
                Tailwind
              </button>
              <button className="border-double border-2 border-green-400  text-sm py-[8px]">
                {" "}
                Node js
              </button>
              <button className="border-double border-2 border-violet-400  text-sm py-[8px]">
                {" "}
                Express js
              </button>
            </p>
            <button className="buttons links my-5">
              <a href="https://drive.google.com/file/d/1j1D-pT8J5klHsF-SeSOyD1DkUF45kg0T/view?usp=sharing">
                Resume
              </a>
            </button>
          </div>

            </Fade>
          

          
        </div>
      </div>
    </div>
  );
};

export default About;
