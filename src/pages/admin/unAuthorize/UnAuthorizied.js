import React from "react";
import Login from "../../login/Login";

const UnAuthorizied = () => {
  return (
    <div>
      <figure>
        <img
          className="h-[500px] w-full"
          src="https://img.freepik.com/free-photo/business-corporate-protection-safety-security-concept_53876-64964.jpg?w=900&t=st=1672089012~exp=1672089612~hmac=1e2e09f72b65bb7be24aeb3405061668e383e1fb48e25208902b650047d2b8e5"
          alt=""
        />
      </figure>

      <footer className="mt-5">
        <Login />
      </footer>
    </div>
  );
};

export default UnAuthorizied;
