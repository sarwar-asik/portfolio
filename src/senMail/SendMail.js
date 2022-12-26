import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";
import "../custom.css";

const SendMail = () => {
  const [text1] = useTypewriter({
    words: ["  Send Your Message to Contact me "],
    loop: 100,
    delaySpeed: 3000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  const storeRevierw = (event) => {
    toast("Thanks for Review ");
    event.preventDefault();
    const form = event.target;

    form.reset();
  };
  return (
    <div className=" border  my-5">
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl fonts">
            <form
              onSubmit={storeRevierw}
              action="https://public.herotofu.com/v1/d2c5b860-78aa-11ed-a126-b172cf164538"
              method="post"
              className="card-body"
            >
              <div>
                <label for="name" className="label">
                  Your Review
                </label>
                <input
                  name="Name"
                  id="name"
                  type="text"
                  placeholder="Type Review "
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label for="email">Your Email</label>
                <input
                  name="Email"
                  id="email"
                  type="email"
                  placeholder=" ex:abc@gmail.com"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <input
                  className="buttons px-3  py-5"
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
            <p className="py-6 fonts">You can send your message to me </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMail;
