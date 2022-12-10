import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "flowbite";
import { Route, RouterProvider, Routes } from "react-router-dom";
import router from "./routes/Routes";
import Sidebar from "./sidebar/Sidebar";
import Home from "./home/Home";
import Footer from "./pages/footer/Footer";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="flex justify-between h-screen">
      <div className="w-[5%]">
        <Sidebar />
      </div>
      <div className="w-[95%] overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <ToastContainer autoClose={1500} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
