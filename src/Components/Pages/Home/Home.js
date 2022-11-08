import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import FoodCards from './FoodCards/FoodCards';

const Home = () => {
    const foods = useLoaderData();
    return (
        <div>
            <div className='bg-primary py-5'>
                {
                    foods.map(food => <Link className='px-7 '
                        key={food.service_id}
                        food={food} to={`/${food.service_id}`}
                    >
                        {food.title}
                    </Link>)
                }
            </div>
            <>
                <Banner />
            </>
        </div >
    );
};

export default Home;