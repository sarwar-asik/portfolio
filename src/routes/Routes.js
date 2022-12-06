import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../errorElement/ErrorPage";
import Home from "../home/Home";
import Main from "../layout/Main";
import Navbar from "../pages/header/Navbar";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        
        // errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:"/signup",
                element:<Signup/>
            },
            {
                path:'/login',
                element:<Login/>
            }
        ]
    }
  
    
  

])


export default router