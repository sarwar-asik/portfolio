import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Flip from 'react-reveal/Flip';
import { useLoaderData, useLocation } from "react-router-dom";
import "../custom.css";
import { FaArrowRight, FaGithub } from "react-icons/fa";
var ReactDOM = require("react-dom");
var Carousel = require("react-responsive-carousel").Carousel;

const ExploreProject = () => {
  const { state } = useLocation();
 

  const { image1, image2, image3, img, live, name, source, tech, time, _id } =
    state;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-[50px] gap-[30px]    max-w-[90%] mx-auto ">
      <div className="">
      <Fade left>
        <Carousel className="" >
          <div>
            <img src={image1} className='' alt='carousel1'/>
            <p className="legend"> {name} Screenshot -1 </p>
          </div>
          <div>
            <img src={image2} className=''  alt='carousel2'/>
            <p className="legend">{name} Screenshot -2</p>
          </div>
          <div>
            <img src={image3} className=''  alt='carousel3'/>
            <p className="legend">{name} Screenshot -3</p>
          </div>
        </Carousel>
      </Fade>
      </div>

    <div className="bg-red-30 px-2">
    <Fade right className=''>
        <div className="">
          <h1 className="text-4xl my-5 headings font-bold">
           {name}
          </h1>
          <p className="normal my-5">
            
            This projects created With my MERN Skills. You can explore more
            feature by sign up . I used Tailwind and flowbite in it .{" "}
          </p>

          <p className=" my-[15px] ">
            <span className="headings text-xl font-semibold"> Created : </span>{" "}
            <span className="normal"> {time}</span>
          </p>
          <p className="text-center text-white"> 
          <Flip right>
          <div className="indicator ">
  <span className="indicator-item indicator-top indicator-start badge badge-info ">React</span>
  <span className="indicator-item indicator-top indicator-center badge badge-primary text-xl">Frontend</span>
  <span className="indicator-item indicator-top indicator-end badge badge-warning">Firebase</span>
  <span className="indicator-item indicator-middle indicator-start badge bg-blue-500">Tailwind</span>
  <span className="indicator-item indicator-middle indicator-center badge badge-primary text-xl">CSS</span>
  <span className="indicator-item indicator-middle indicator-end badge bg-blue-800">Flowbite</span>
  <span className="indicator-item indicator-bottom indicator-start badge bg-green-700">MongoDB</span>
  <span className="indicator-item indicator-bottom indicator-center badge badge-primary text-xl">Backend </span>
  <span className="indicator-item indicator-bottom indicator-end badge bg-yellow-800">Node</span>
  <div className="grid w-60 h-32 normal  place-items-center" style={{"backgroundImage":`url(${image1})`}}>{name}</div>
</div>
     </Flip>
         </p>
         <div className=" flex justify-between my-5">
                  <a
                    href={live}
                    className="flex items-center gap-2 text-blue-400  texts-transition font-bold h-[55px]"
                    target="_blank"
                  >
                    <p className="">Live Site </p>
                    <FaArrowRight />
                  </a>

                  <a
                    href={source}
                    className="flex items-center gap-3 text-slate-400 font-bold hover:text-slate-600  texts-transition h-[55px]"
                    target="_blank"
                  >
                    <p className="">Source Code </p>
                    <FaGithub />
                  </a>
                </div>

                <h1 className="text-center fonts"> Updating Details <progress className="progress w-56 "></progress> ....</h1>
 

        </div>
      </Fade>
    </div>
    </div>
  );
};

export default ExploreProject;
