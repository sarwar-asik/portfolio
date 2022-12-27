import React, { useContext } from "react";

import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import "../../src/custom.css";
import Services from "../services/Services";
import MyProjects from "../myProjects/MyProjects";
import { AuthContext } from "../firebase/AuthProvider";
import SendMail from "../senMail/SendMail";
import ProfileBanner from "../profileBanner/ProfileBanner";
import Features from "../pages/features/Features";

const Home = () => {
  const { theme } = useContext(AuthContext);

  return (
    <div className='ml-7' >
      <ProfileBanner/>
      <Services />
      <MyProjects/>
      <Features/>
      
      <SendMail/>
    </div>
  );
};

export default Home;
