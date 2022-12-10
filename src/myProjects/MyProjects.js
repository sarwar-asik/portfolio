import React from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";

const MyProjects = () => {
  const allprojects = [
    {
      name: "Used Car Depot",
      live: "https://used-cars-project-a88b9.web.app/",
      source: "https://github.com/sarwar-asik/used-car-depo",
      time: "22 Novembar 2022",
      img: "https://img.freepik.com/free-photo/close-up-sales-manager-black-suit-selling-car-customer_146671-14738.jpg?w=1060&t=st=1669575585~exp=1669576185~hmac=53856eedf892cf04de36a6392f12385e9c99518e18e06dc5a303578aa3f880db",
    },
    {
      name: "Service Provider",
      live: "https://sh-travel-service.web.app/",
      source: "https://github.com/sarwar-asik/service-provider-projects",
      img: "https://img.freepik.com/free-photo/travelling-concept-with-group-travelers-miniature_1150-17844.jpg?w=1060&t=st=1667845175~exp=1667845775~hmac=0c04f3582866bcb24f3e6c8dec9ab70723493d1f86dc0e833c63a9387b3b03d0",
      time: "2 Novembar 2022",
    },
    {
      name: "Doctors Portal",
      live: "https://sh-five-stars-hotel.web.app/",
      source: "https://github.com/sarwar-asik/doctors-project",
      time: "20 Octobar 2022",
      img: "https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?size=626&ext=jpg&ga=GA1.2.537590259.1669397270&semt=sph",
    },
  ];
  return (
    <div className="bg-blac my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allprojects?.map((project) => {
          return (
            <div className="card w-96  mx-auto glass">
              <figure>
                <img src={project?.img} alt="car!" />
              </figure>

              <div className="mt-3 px-2 py-5 pb-5">
                <h2 className="text-3xl fonts">{project?.name}</h2>
                <div className="flex justify-between my-2">
                  <a
                    href={project.live}
                    className="flex items-center gap-2 fonts font-bold"
                  >
                    <p className="">Live Site </p>
                    <FaArrowRight />
                  </a>

                  <a
                    href={project?.source}
                    className="flex items-center gap-3 text-slate-400 font-bold hover:text-slate-800"
                  >
                    <p className="">Source Code </p>
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
