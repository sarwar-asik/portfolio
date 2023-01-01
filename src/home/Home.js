import React, { useContext } from "react";

import "../../src/custom.css";
import Services from "../pages/service/Services";
import MyProjects from "../pages/myProjects/MyProjects";
import { AuthContext } from "../firebase/AuthProvider";
import ProfileBanner from "../pages/profileBanner/ProfileBanner";
import Features from "../pages/features/Features";
import Contactme from "../pages/senMail/ContactMe";

const Home = () => {
  const { theme } = useContext(AuthContext);

  return (
    <div className="ml-7">
      <ProfileBanner />
      <Services />
      <MyProjects />
      <Features />
      <Contactme />
    </div>
  );
};

export default Home;
