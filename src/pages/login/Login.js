import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";
import { AuthContext } from "../../firebase/AuthProvider";
import "../../custom.scss";

const Login = () => {
  const navigate = useNavigate();

  const [text1] = useTypewriter({
    words: [" Login as Admin"],
    loop: 100,
    delaySpeed: 3000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  const { createUser, login } = useContext(AuthContext);
  const [show, setShow] = useState(true);
  const [error, setError] = useState("");

  const handleShow = () => {
    setShow(!show);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.password.value;
    login(email, pass)
      .then((result) => {
        const user = result.user;
        console.log(result, user);
        setError("");
        toast(user);
        form.reset();
        navigate(`/addDetails`);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  return (
    <div className=" border  my-5">
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl fonts">
            <form onSubmit={handleLogin} className="card-body">
              <div>
                <label for="email" className="label">
                  Your Email
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Type Email "
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label for="password">Your Password</label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="text-red-500">{error}</div>
              <div>
                <input
                  className="px-3  py-5"
                  id="buttons"
                  type="submit"
                  value="Send "
                />
              </div>
            </form>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold fonts h-[70px] w-[300px]">
              {text1}
            </h1>
            <p className="py-6 fonts">
              Admin can Login for editing the website. <br /> You have to
              impleament the password for login .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
