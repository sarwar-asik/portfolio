import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import profile from "../../assets/professional-removebg-preview.png";
import profileBG from "../../assets/wave (1).svg";
import Fade from "react-reveal/Fade";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ProfileBanner = () => {
  const [text1] = useTypewriter({
    words: [
      "Web Developer",
      "Frontend Developer",
      "MERN Stack Developer",
      "React Developer",
    ],
    loop: 200,
    delaySpeed: 2000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="block lg:flex items-center justify-between lg:px-[30px] sm:px-[10px]  w-[95%] mx-auto">
      <section className="lg:w-[45%] mx-auto sm:w-full">
        <h1 className="text-5xl font-bold font-serif"> Sarwar Hossain </h1>
        <h3 className="h-14 text-2xl mt-3 font-semibold font-sans">
          {text1}
        </h3>
        <p className="font-normal lg:text-xl mt-2 sm:text-lg text-slate-500 mb-8">
          I am a Front-end Developer working with <br /> passionate . My goal is achieve success by <br />
          Hard working .
        </p>
        <a href="https://drive.google.com/file/d/1j1D-pT8J5klHsF-SeSOyD1DkUF45kg0T/view?usp=sharing" 
        target="_blank" rel="noreferrer" 
        className="bg-[#8fcdf9] py-5 px-2 my-5 rounded-lg font-bold text-slate-7 hover:bg-slate-600 hover:text-[#a2d9ff]"> My Resume</a>

      </section>
      <section className="lg:w-[55%] mx-auto sm:w-full profile ">
        <img src={profile} className=" z-10 mx-auto w-[80%]" alt="" />
      </section>
    </div>
  );
};

export default ProfileBanner;
