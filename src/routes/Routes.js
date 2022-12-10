import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../errorElement/ErrorPage";
import Home from "../home/Home";
import Main from "../layout/Main";
import Project from "../pages/admin/AddProject";
import Skills from "../pages/admin/Skills";
import Navbar from "../pages/header/Navbar";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    // errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
    ],
  },
]);

export default router;
