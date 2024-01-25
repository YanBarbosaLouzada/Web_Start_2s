import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Outlet/Layout";
import AnimePage from "./Pages/AnimePage/AnimePage";
import HomePage from "./Pages/HomePage/HomePage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"animes",
                element:<AnimePage/>
            },
            {
                path:"/",
                element:<HomePage/>
            },
        ],
        errorElement:<ErrorPage/>
    }
])