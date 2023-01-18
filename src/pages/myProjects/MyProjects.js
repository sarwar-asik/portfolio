import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { Zoom } from "react-reveal";
import { Link, useNavigate } from "react-router-dom";
import "../../custom.scss";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useReducer } from "react";
import {
  initialState,
  projectsReducer,
} from "../../SharedComponents/states/redux/ReducerMessage";

const MyProjects = () => {
  const navigate = useNavigate();
  // redux ////
  const [state, dispatch] = useReducer(projectsReducer, initialState);

  const { data: allprojects = [], refetch } = useQuery({
    queryKey: ["projects"],
    queryFn: () =>
      fetch("https://sarwar-hossain-server.vercel.app/projectDetail")
        .then((res) => res.json())
        .then((data) => data),
  });

  const [finds, setfinds] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: `https://sarwar-hossain-server.vercel.app/projectDetail`,
    }).then((data) => {
      setfinds(data.data);
    });
  }, []);

  const handleClick = (data) => {
    navigate(`/project/${data?.name}`, { state: data });
  };

  return (
    <div className=" my-10 w-[95%] mx-auto" style={{ overflow: "hidden" }}>
      <h1 className=" text-5xl my-5 font-bold font-serif "> My Projects ,</h1>
      <p className="font-normal lg:text-xl mt-2 sm:text-lg text-slate-500 mb-8">
        {" "}
        There are some my projects those I created recently. <br />
        You can explore my projects click by live{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allprojects?.map((project) => {
          console.log(project);
          return (
            <div className="shadow-2xl p-2 ">
              <figure className="">
                <img
                  src={project?.img}
                  className="h-[32rem]  lg:w-[90%] sm:w-full mx-auto rounded-lg"
                  alt=""
                />
              </figure>
              <h1 className="text-3xl font-bold  text-center mt-2 text-slate-600 font-serif">
                {" "}
                {project?.name}
              </h1>
              <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
                <a
                  className="text-xl font-semibold font-mono bg-[#a2d9ff]  py-1 px-3 rounded-lg text-slate-700  hover:bg-slate-300 shadow-xl"
                  href={project?.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Live site{" "}
                </a>
                <a
                  className="text-xl font-semibold font-mono bg-[#a2d9ff] py-1 px-3 rounded-lg text-slate-700 hover:bg-slate-300 shadow-xl"
                  href={project?.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Github{" "}
                </a>
              </div>
              <button
                onClick={() => handleClick(project)}
                className="w-full my-5 py-3 bg-slate-300 font-bold text-2xl  hover:bg-[#a2d9ff]"
              >
                Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
