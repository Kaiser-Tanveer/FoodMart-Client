import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Details from "../Pages/Details/Details";
import FoodCards from "../Pages/Home/FoodCards/FoodCards";
import Home from "../Pages/Home/Home";
import MyReview from "../Pages/MyReview/MyReview";
import NotFound from "../Pages/NotFound/NotFound";
import LogIn from "../Pages/Register/LogIn";
import Register from "../Pages/Register/Register";
import Reviews from "../Pages/Reviews/Reviews";
import WhatOffers from "../Pages/WhatOffers/WhatOffers";
import Main from "./Layout/Main";
import PrivateRoute from "./PriveteRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://food-mart-server.vercel.app/home')
            },
            {
                path: '/services',
                element: <FoodCards />,
                loader: () => fetch('https://food-mart-server.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <Details />,
                loader: ({ params }) => fetch(`https://food-mart-server.vercel.app/services/${params.id}`)
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
                path: '/myReview',
                element: <PrivateRoute><MyReview /></PrivateRoute>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService /></PrivateRoute>
            },
            {
                path: '/review/:id',
                element: <PrivateRoute><Reviews /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-mart-server.vercel.app/review/${params.id}`)
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    }
]);

export default router;