import React, { useState } from "react";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };
  const handleUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const type = form.type.value;
    const email = form.email.value;

    fetch(`https://sarwar-hossain-server.vercel.app/adduser`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email, type }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast(`Added ${name}`);
      });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 gap-3 items-center   max-w-[70%] mx-auto mb-[20%]">
      <div className="">
        <figure>
          <img
            className="rounded-xl h-[500px] "
            src="https://img.freepik.com/free-photo/biometric-technology-background-with-fingerprint-scanning-system-virtual-screen-digital-remix_53876-104197.jpg?w=996&t=st=1670097729~exp=1670098329~hmac=65d36b6f9d41dc21509718f25324d5361e491e4ddf4e90edb4f824870c96a7d5"
            alt=""
          />
        </figure>
      </div>
      <form onSubmit={handleUser} action="" className="py-5">
        <h1 className="text-3xl my-5 font-bold text-center fonts">
          Sign Up , Please .
        </h1>
        <div class="flex items-center mb-5">
          <label
            for="name"
            class="w-20 inline-block text-right mr-4 text-gray-500 "
          >
            Name
          </label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Your name"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
        </div>
        <div class="flex items-center mb-5">
          <label
            for="type"
            class="w-20 inline-block text-right mr-4 text-gray-500 "
          >
            Type
          </label>
          <input
            name="type"
            id="type"
            type="text"
            placeholder="Your type"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
        </div>
        <div class="flex items-center mb-5">
          <label
            for="email"
            class="w-20 inline-block text-right mr-4 text-gray-500 "
          >
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Your type"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
        </div>
        <div class="flex items-center mb-10">
          <label
            for="password"
            class="w-20 inline-block text-right mr-4 text-gray-500 "
          >
            Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Your Password"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
        </div>
        <p className="text-center fonts">
          {" "}
          Did you sign Up ?{" "}
          <Link to="/login">
            {" "}
            <span className="normal"> Login Please ....</span>
          </Link>
        </p>
        <div class="text-right">
          <input
            type="submit"
            value="Sign Up"
            class="py-3 px-8 buttons  font-bold rounded"
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;
