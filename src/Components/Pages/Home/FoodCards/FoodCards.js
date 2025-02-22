import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../../DynamicTitle/DynamicTitle';
import { useState } from 'react';
import Cards from './Cards';
import './FoodCards.css';

const FoodCards = () => {
    const foods = useLoaderData();
    useTitle('Services');

    const [showAll, setShowAll] = useState(false);

    // Show only 4 items initially
    const visibleFoods = showAll ? foods : foods.slice(0, 4);

    return (
        <div className='foodBg py-20'>
            <h1 className='mb-10 text-5xl text-white font-bold'>Welcome to <span className='text-primary'>FoodMart</span>!!!</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-4/5 mx-auto'>
                {
                    visibleFoods.map(food => <Cards
                        key={food._id}
                        food={food}
                    />)
                }
            </div>

            {
                foods.length > 4 && !showAll && (
                    <button onClick={() => setShowAll(true)} className='btn btn-primary mt-10'>
                        See All
                    </button>
                )
            }
        </div>
    );
};

export default FoodCards;
