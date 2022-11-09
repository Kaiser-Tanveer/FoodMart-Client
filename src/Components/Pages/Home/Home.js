import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../DynamicTitle/DynamicTitle';
import AboutUs from '../AboutUs/AboutUs';
import WhatOffers from '../WhatOffers/WhatOffers';
import Banner from './Banner/Banner';
import FoodCards from './FoodCards/FoodCards';
import FoodMenu from './FoodMenu/FoodMenu';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <div className='bg-primary text-white font-semibold py-5 shadow'>
                <FoodMenu />
            </div>
            <>
                <Banner />
                <FoodCards />
                <WhatOffers />
                <AboutUs />
            </>
        </div >
    );
};

export default Home;