import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        children:[
            {
                path:'/aboutme',
                element:<AboutMe/>
            }
        ]
    }
]);