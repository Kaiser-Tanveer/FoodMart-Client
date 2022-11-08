import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import FoodCards from "../Pages/Home/FoodCards/FoodCards";
import Home from "../Pages/Home/Home";
import Main from "./Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000')
            },
            {
                path: '/services',
                element: <FoodCards />,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <FoodCards />,
                loader: () => fetch('http://localhost:5000')
            },
            {
                path: '/blog',
                element: <Blog />
            }
        ]
    }
]);

export default router;