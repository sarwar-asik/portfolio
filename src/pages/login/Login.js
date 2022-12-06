import React from 'react';

const Login = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 gap-3 items-center ">
     
        <div className="">
          <figure >
              <img 
              className="rounded-xl h-[500px]"
              
              src="https://img.freepik.com/free-photo/biometric-technology-background-with-fingerprint-scanning-system-virtual-screen-digital-remix_53876-104197.jpg?w=996&t=st=1670097729~exp=1670098329~hmac=65d36b6f9d41dc21509718f25324d5361e491e4ddf4e90edb4f824870c96a7d5" alt="" />
          </figure>
        </div>
        <form action="" className="py-5">
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
  
          <div class="flex items-center mb-10">
            <label
              for="twitter"
              class="w-20 inline-block text-right mr-4 text-gray-500 "
            >
              password
            </label>
            <input
              type="text"
              name="password"
              id="twitter"
              placeholder="Your Password"
              class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            />
          </div>
          <div class="text-right">
            <button class="py-3 px-8 bg-green-500 text-green-100 font-bold rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default Login;