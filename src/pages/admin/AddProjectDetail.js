import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddProjectDetail = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://sarwar-hossain-server.vercel.app/projects`,
    }).then((data) => {
      setProjects(data.data);
    });
  }, []);

  const addDetail = (event) => {
    event.preventDefault();
    const form = event.target;
    const project = form.projectName.value;
    const image1 = form.photo1.value;
    const image2 = form.photo2.value;
    const image3 = form.photo3.value;

    console.log(image1, image2, image3, "and...", project);

    const totalImage = { image1, image2, image3 };

    const selectedProject = projects.find(
      (selected) => selected.name === project
    );
    const newProject = { ...selectedProject, ...totalImage };
    console.log(newProject);

    fetch("https://sarwar-hossain-server.vercel.app/addproductDetail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProject),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Added");
        form.reset();
      });
  };

  return (
    <div className="max-w-[80%] mx-auto">
      <h1 className="text-4xl "> Add Detail Detail for this projects . </h1>
      <form onSubmit={addDetail} action="" className="py-5 ">
        <div class=" mb-5">
          <label for="type" class=" text-right mr-4 normal ">
            ScreenShots -1
          </label>
          <input
            name="photo1"
            id="type"
            type="text"
            placeholder="Paste url"
            class="border-b-2 w-full border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
        </div>
        <div class=" items-center mb-5">
          <label for="type" class=" mr-4  normal">
            ScreenShots-2
          </label>
          <input
            name="photo2"
            id="type"
            type="text"
            placeholder="Paste url"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 w-full outline-none focus:border-green-400"
          />
        </div>
        <div class="mb-5">
          <label for="type" class=" mr-4  normal">
            ScreenSHots-3
          </label>
          <input
            name="photo3"
            id="type"
            type="text"
            placeholder="Paste url"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 w-full outline-none focus:border-green-400"
          />
        </div>

        <div className=" items-center mb-10 ">
          <span class="w-20 inline-block text-right mr-4  ">
            {" "}
            Select Projects :
          </span>
          <select name="projectName" id="">
            {projects?.map((project) => (
              <option value={project.name}>{project.name}</option>
            ))}
          </select>
        </div>

        <div class="text-right">
          <input
            type="submit"
            value="Add Projects"
            class="py-3 px-8 buttons  font-bold rounded"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProjectDetail;
