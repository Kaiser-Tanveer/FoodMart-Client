import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Pages/AboutUs/AboutUs";
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
                loader: () => fetch('http://localhost:5000/home')
            },
            {
                path: '/services',
                element: <FoodCards />,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><Details /></PrivateRoute>,
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
                path: '/myReview',
                element: <PrivateRoute><MyReview /></PrivateRoute>
            },
            {
                path: '/review/:id',
                element: <PrivateRoute><Reviews /></PrivateRoute>,
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