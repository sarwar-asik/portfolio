import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import profile from "../assets/professional-removebg-preview.png";
import Fade from "react-reveal/Fade";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ProfileBanner = () => {
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

  return (
    <div>
      <div className="hero ">
        <div className="hero-content  flex-col lg:flex-row-reverse lg:justify-between  gap-[20px]">
          <Fade left>
            <figure className="mx-auto">
              <PhotoProvider>
                <PhotoView src={profile}>
                  <img
                    src={profile}
                    className="mx-w-[80%] rounded-[50%] fonts "
                    alt="sarwar-hossain"
                  />
                </PhotoView>
              </PhotoProvider>
            </figure>
          </Fade>
          <Fade right>
            <div className="sm:px-[15%] md:px-[15%] lg:px-[0px]">
              <p className="text-4xl">
                <span className="normal font-bold"> I am </span>
                <span className="text-4xl font-bold fonts">SARWAR HOSSAIN</span>
              </p>

              <p className="py-3 fonts h-[50px] font-semibold text-2xl">
                {text1}
              </p>
              <p className="normal font-normal">
                I am a frontend web developer. I can provide clean code and
                pixel perfect design. <br /> I also make website more & more
                interactive with web animations.
              </p>
              <p className="my-[15px]">
                <span className="font-semibold fonts "> Full Name : </span>{" "}
                <span className="normal"> SARWAR HOSSAIN</span>
              </p>
              <p className="my-[15px]">
                <span className="font-semibold fonts"> Profession : </span>{" "}
                <span className="normal h-[70px]"> {text1}</span>
              </p>
              <p className="my-[15px]">
                <span className="font-semibold fonts">
                  {" "}
                  Age &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :
                </span>{" "}
                <span className="normal"> 24</span>
              </p>
              <p className="my-[15px]">
                <span className="font-semibold fonts"> Nationality : </span>{" "}
                <span className="normal"> Bangladeshi</span>
              </p>

              <button className="buttons py-5 px-3 links">
                <a
                  href="https://drive.google.com/file/d/1j1D-pT8J5klHsF-SeSOyD1DkUF45kg0T/view?usp=sharing"
                  target="_blank"
                >
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

export default ProfileBanner;
