import { createBrowserRouter } from "react-router-dom";
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
                loader: () => fetch('foodServices.json')
            },
            {
                path: '/services',
                element: <FoodCards />,
                loader: () => fetch('foodServices.json')
            }
        ]
    }
]);

export default router;