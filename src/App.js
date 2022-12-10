import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "flowbite";
import { Route, RouterProvider, Routes } from "react-router-dom";
import router from "./routes/Routes";
import Sidebar from "./sidebar/Sidebar";
import Home from "./home/Home";
import Footer from "./pages/footer/Footer";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./firebase/AuthProvider";

function App() {
  const { theme, setTheme } = useContext(AuthContext);

  const handleTheme = () => {
    setTheme(!theme);
    console.log(theme);

  };

  // console.log(theme);

  return (
    <div className="flex justify-between h-screen mainfont">
      <div className="w-[5%] ">
        <Sidebar />
        {/* <select onBlur={e=>setTheme(e.target.value)} name='theme' className="select select-bordered  theme">
          <option selected disabled>Theme</option>
          <option value='Light'>Light</option>
          <option value='Dark'>Dark</option>
          
     </select> */}
     
        <label
         
          class="inline-flex relative items-center cursor-pointer theme"
        >
          <input  onClick={handleTheme} type="checkbox" value="" class="sr-only peer" />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-00"></div>
          <span class={`ml-3 text-sm font-bold  ${theme?'text-slate-100':'text-slate-700'}`}>
            {theme ? "Light" : "Dark"}
          </span>
        </label>


      </div>
      <div className="w-[95%] overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
      <ToastContainer autoClose={1500} />
    </div>
  );
}

export default App;
