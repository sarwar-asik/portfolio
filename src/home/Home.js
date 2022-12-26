import React, { useContext } from "react";

import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import "../../src/custom.css";
import Services from "../services/Services";
import MyProjects from "../myProjects/MyProjects";
import { AuthContext } from "../firebase/AuthProvider";
import SendMail from "../senMail/SendMail";
import ProfileBanner from "../profileBanner/ProfileBanner";

const Home = () => {
  const { theme } = useContext(AuthContext);

  return (
    <div className='ml-7' >
      <ProfileBanner/>
      <Services />
      <MyProjects/>
      <SendMail/>
    </div>
  );
};

export default Home;
