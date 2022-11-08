import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';

const Home = () => {
    const foods = useLoaderData();
    return (
        <div>
            <div className='bg-primary text-white font-semibold py-5 shadow'>
                {
                    foods.map(food => <Link className='px-7 hover:underline'
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