import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { Zoom } from "react-reveal";
import { Link, useNavigate } from "react-router-dom";
import "../../custom.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const MyProjects = () => {
  const navigate = useNavigate();

  const { data: allprojects = [], refetch } = useQuery({
    queryKey: ["projects"],
    queryFn: () =>
      fetch("https://sarwar-hossain-server.vercel.app/projectDetail")
        .then((res) => res.json())
        .then((data) => data),
  });

  const [projects, setProjects] = useState({});
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
    <div className=" my-10" style={{ overflow: "hidden" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allprojects?.map((project) => {
          return (
            <Zoom>
              <div className="card w-[80%]  mx-auto glass">
                <figure>
                  <PhotoProvider>
                    <PhotoView src={project?.img}>
                      <img
                        className="projectimg max-w-[80%]"
                        src={project?.img}
                        alt="project"
                      />
                    </PhotoView>
                  </PhotoProvider>
                  <PhotoProvider>
                    <PhotoView src={project?.img}>
                      <img
                        className="projectimg max-h-[400px]"
                        src={project?.img}
                        alt="project"
                      />
                    </PhotoView>
                  </PhotoProvider>
                </figure>

                <div className="mt-3 shadow-2xl px-2 py-5 pb-5 border-4">
                  <h2 className="text-3xl fonts">{project?.name}</h2>
                  <div className=" flex justify-between my-5">
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-blue-400  texts-transition font-bold h-[55px]"
                      target="_blank"
                    >
                      <p className="">Live Site </p>
                      <FaArrowRight />
                    </a>

                    <a
                      className="flex items-center gap-3 text-slate-400 font-bold hover:text-slate-600  texts-transition h-[55px]"
                      href={project?.source}
                      target="_blank"
                    >
                      <p className="">Source Code </p>
                      <FaGithub />
                    </a>
                  </div>

                  <p className="text-2xl font-bold fonts">Used Technology :</p>
                  <div className="flex gap-4 my-3">
                    {project?.tech?.map((img) => (
                      <img
                        className="w-[40px] icons h-[40px]"
                        src={img}
                        alt="tech img"
                      />
                    ))}
                  </div>
                  <div
                    onClick={() => handleClick(project)}
                    className="card-actions justify-end"
                  >
                    <button className="buttons px-2 py-3 rounded-[10px]">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
