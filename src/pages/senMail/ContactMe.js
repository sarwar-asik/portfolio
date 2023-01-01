import React, { useState } from "react";
import { useContext } from "react";
import {
  FaEye,
  FaEyeDropper,
  FaEyeSlash,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../firebase/AuthProvider";
import banner from "../../assets/professional-removebg-preview.png";
import { useReducer } from "react";

const Contactme = () => {
  const theme1 = "#064f60";

  const initialState = {
    name: "",
    email: "email",
    message: "",
  };

  const reducer = (state, action) => {
    console.log("from top of switch in reducer", action);
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      return state;
      case "INCREMENT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case "DECREMENT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const storeRevierw = (event) => {
    event.preventDefault();
    console.log("state from storeReview ", state);
    
    // const form = event.target;
    // toast(`Thank ${form.email.value}`);
    // form.reset();
  };

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5">
        <aside className=" p-3 shadow-lg">
          <h1 className="headings1"> Message Me </h1>
          <form onSubmit={storeRevierw}>
            {/* 
            method="post"
           action="https://public.herotofu.com/v1/d2c5b860-78aa-11ed-a126-b172cf164538"

             */}
            <input
              className="input input-bordered input-info my-3 w-full"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              name="name"
              type="text"
              placeholder="Your Name "
            />

            <input
             onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
              className="input input-bordered input-info my-3 w-full"
              name="email"
              type="email"
              placeholder="Your Email "
              required
            />
            <textarea
             onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
              className="w-full textarea textarea-info "
              name="message"
              placeholder="Write Your Message ...."
              id=""
              cols={30}
              rows={5}
            ></textarea>
            <input
              className="h-[50px] text-white w-[80px] bg-blue-600 p-2"
              type="submit"
              value="Send "
            />
          </form>
        </aside>

        <aside className={`py-[200px]  px-3 rounded-lg bg-[${theme1}]`}>
          <header className="flex justify-between items-center text-6xl text-white font-serif">
            <h1>
              {" "}
              Sarwar <br /> Hossain
            </h1>
            <figure className="p-[2px] bg-slate-400 rounded-full">
              <img
                className="h-32 w-32 border-4 border-blue-400  rounded-full "
                src={banner}
                alt=""
              />
            </figure>
          </header>
          <div className="mt-5">
            <h3 className="text-xl text-white"> Phone </h3>
            <p className="text-3xl font-thin text-slate-500">+880160219933</p>
            <p className="mt-3">
              <h3 className="text-xl text-white"> Gmail </h3>
              <p className="text-2xl font-bold text-slate-500">
                sarwarasik@gmail.com
              </p>
            </p>
            <p className=" flex gap-3 mt-8 text-3xl">
              <a
                href="https://www.facebook.com/profile.php?id=100087624802395"
                className="text-white shadow-lg p-2"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/sarwar-hossain-a29660257/"
                className="text-white shadow-lg p-2"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/sarwar-asik"
                className="text-slate-500 shadow-lg p-2"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Contactme;
