import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "flowbite";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Footer from "./SharedComponents/footer/Footer";
import Signup from "./pages/signup/Signup";
import { useContext } from "react";
import { AuthContext } from "./firebase/AuthProvider";
import ExploreProject from "./pages/myProjects/ExploreProject";
import MyProjects from "./pages/myProjects/MyProjects";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddProjectDetail from "./pages/admin/AddProjectDetail";
import About from "./pages/about/About";
import UnAuthorizied from "./pages/admin/unAuthorize/UnAuthorizied";
import SidebarSM from "./SharedComponents/sidebar/SlibarSM";
import Contactme from "./pages/senMail/ContactMe";
import Login from "./pages/login/Login";

const queryClient = new QueryClient();
function App() {
  const { theme } = useContext(AuthContext);
  return (
    <div
      className="flex justify-between  mainfont"
      style={{ backgroundColor: `${theme ? "#181D31" : ""}` }}
    >
      <QueryClientProvider client={queryClient}>
        <div className="w-[5%] ">
          <SidebarSM />
        </div>
        <div className="w-[95%] mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notAdmin" element={<UnAuthorizied />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/project/:name" element={<ExploreProject />} />
            <Route path="/addDetails" element={<AddProjectDetail />} />
            <Route path="/projects" element={<MyProjects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contactme />} />
          </Routes>
          <Footer />
        </div>
        <ToastContainer autoClose={1500} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
