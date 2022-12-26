import React from "react";
import html from "../assets/icon/HTML.png";
import css from "../assets/icon/cssIcon-removebg-preview.png";
import react from "../assets/icon/reactIcon-removebg-preview.png";
import mongo from "../assets/icon/mongoDB-removebg-preview.png";
import node from "../assets/icon/nodeIcon.png";
import js from "../assets/icon/jsIcon.png";

const Services = () => {
  const services = [
    {
      name: "HTML",
      img: html,
      range:"97",
      color:"blue"
    },
    {
      name: "CSS",
      img: css,
      range:"90",
      color:"blue"
    },
    {
      name: "JavaScript",
      img: js,
      range:"87",
      color:"yellow"

    },
    {
      name: "REACT",
      img: react,
      range:"85",
      color:"blue"
    },
    {
      name: "Node ",
      img: node,
      range:"60",
      color:"green"
    },

    {
      name: "MONGODB",
      img: mongo,
      range:"55",
      color:"green"
    },
  ];

  return (
    <div className=" my-[50px] w-[98%] mx-auto">
      <h1 className="fonts  font-bold text-4xl py-[10px] mt-[20px]">
        My Skills{" "}
      </h1>
      <div className="">
      <div className="grid grid-cols-3   gap-[20px] py-5  ">
        {services.map((service) => {
          return (
            <div class=" mx-auto flex w-[100%] gap-4 items-center  rounded-lg  shadow-md relative bg-red-40">
              <figure className="">
                <img src={service.img} className="h-[80px] w-[90px]  " alt="" />
              </figure>

              <div class="w-full bg-gray-200  rounded-full dark:bg-gray-700">
                <div
                  class={`bg-${service?.color}-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
                  style={{"width":`${service?.range}%`}}
                >
           
                {service?.range} %  {service.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="">

      </div>
      </div>
    </div>
  );
};

export default Services;
