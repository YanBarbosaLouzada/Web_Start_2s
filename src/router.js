import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Outlet/Layout";
import AnimePage from "./Pages/AnimePage/AnimePage";
import HomePage from "./Pages/HomePage/HomePage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Favorito from "./Pages/FavPage/Favorito";


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
            {
                path:"favorito",
                element:<Favorito/>,
                loader:async()=>{
                    return fetch(`https://api.jikan.moe/v4/anime?q=onepunch`);
                },
            },
        ],
        errorElement:<ErrorPage/>
    }
])