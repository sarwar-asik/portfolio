import React from "react";
import '../custom.css'

const SendMail = () => {
  return (
    <div className=" border  my-5">
      <form
        action="https://public.herotofu.com/v1/d2c5b860-78aa-11ed-a126-b172cf164538"
        method="post"
      >
        <div>
          <label for="name">Your Name</label>
          <input name="Name" id="name" type="text" required />
        </div>
        <div>
          <label for="email">Your Email</label>
          <input name="Email" id="email" type="email" required />
        </div>
        <div>
          <input className="btn btn-error" type="submit" value="Send " />
        </div>
      </form>

      <div className="hero min-h-screen max ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold fonts"> Please , Send Your Review . </h1>
            <p className="py-6 fonts">
             You can send your opinion about me ..
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl fonts">
            {/* <form
              action="https://public.herotofu.com/v1/d2c5b860-78aa-11ed-a126-b172cf164538"
              method="post"
              className="card-body"
            >
              <div className="">
                <label className="label">
                  <span className="">Message</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Write your message"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="">Your Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Type Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-error" type="submit" value="Send " />
              </div>
            </form> */}
              <form
        action="https://public.herotofu.com/v1/d2c5b860-78aa-11ed-a126-b172cf164538"
        method="post"
        className="card-body"
      >
        <div>
          <label for="name" className="label">Your Name</label>
          <input name="Name" id="name" type="text"
           className="input input-bordered w-full"
            required />
        </div>
        <div>
          <label for="email">Your Email</label>
          <input name="Email" id="email" type="email" className="input input-bordered w-full" required />
        </div>
        <div>
          <input className="btn fonts btn-ghost" type="submit" value="Send " />
        </div>
      </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMail;
