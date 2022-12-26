import React from 'react';

const Login = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 gap-3 items-center max-w-[80%] mx-auto">
     
        <div className="">
          <figure >
              <img 
              className="rounded-xl h-[500px]"
              
              src="https://img.freepik.com/free-photo/biometric-technology-background-with-fingerprint-scanning-system-virtual-screen-digital-remix_53876-104197.jpg?w=996&t=st=1670097729~exp=1670098329~hmac=65d36b6f9d41dc21509718f25324d5361e491e4ddf4e90edb4f824870c96a7d5" alt="" />
          </figure>
        </div>
        <form  className="card-body"
            >        
              <div>
                <label for="email">Your Email</label>
                <input
                  name="Email"
                  id="email"
                  type="email"
                  placeholder= " ex:abc@gmail.com"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label for="name" className="label">
                  Your Password
                </label>
                <input
                  name="Name"
                  id="name"
                  type="password"
                  placeholder="Type Password"
                  className="input input-bordered w-full"
                  required   
                />
              </div>
              <div>
                <input className="buttons" type="submit" value="Send " />
              </div>
            </form>
      </div>
    );
};

export default Login;