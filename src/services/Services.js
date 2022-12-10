import React from "react";
import html from "../assets/icon/HTML.png";
import css from "../assets/icon/cssIcon-removebg-preview.png";
import react from "../assets/icon/reactIcon-removebg-preview.png";
import mongo from "../assets/icon/mongoDB-removebg-preview.png";
import node from "../assets/icon/HTML-removebg-preview.png";

const Services = () => {
  const services = [
    {
      name: "HTML",
      img: html,
    },
    {
      name: "CSS",
      img: css,
    },
    {
      name: "REACT",
      img: react,
    },
    {
      name: "MONGODB",
      img: mongo,
    },
  ];

  return (
    <div className=" mt-[50px]">
      <h1 className="fonts text-center font-bold text-5xl py-[10px] mt-[20px]">My Skills  </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[30px] py-5  ">
        {services.map((service) => {
          return (
            <div class="w-[80%] p-6  mx-auto rounded-lg shadow-md ">
              <div className="flex justify-between">
                <figure className="">
                  <img src={service.img} className="h-[90px] w-[90px]" alt="" />
                </figure>
                <p className="text-3xl font-extrabold items-center fonts">
                  {service.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
