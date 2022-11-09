import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import Details from "../Pages/Details/Details";
import FoodCards from "../Pages/Home/FoodCards/FoodCards";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import LogIn from "../Pages/Register/LogIn";
import Register from "../Pages/Register/Register";
import Reviews from "../Pages/Reviews/Reviews";
import WhatOffers from "../Pages/WhatOffers/WhatOffers";
import Main from "./Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/home')
            },
            {
                path: '/services',
                element: <FoodCards />,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <Details />,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/offer',
                element: <WhatOffers />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/logIn',
                element: <LogIn />
            },
            {
                path: '/review/:id',
                element: <Reviews />,
                loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`)
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    }
]);

export default router;