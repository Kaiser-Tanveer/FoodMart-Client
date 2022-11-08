import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import FoodCards from './FoodCards/FoodCards';

const Home = () => {
    const foods = useLoaderData();
    return (
        <div>
            <div className='bg-primary text-white font-semibold py-5 shadow'>
                {
                    foods.map(food => <Link className='px-7 hover:underline'
                        key={food.service_id}
                        food={food} to={`/services/${food._id}`}
                    >
                        <p className='block lg:inline-flex'>{food.title}</p>
                    </Link>)
                }
            </div>
            <>
                <Banner />
                <FoodCards />
            </>
        </div >
    );
};

export default Home;