import { useLoaderData } from 'react-router-dom';
import Cards from './Cards';
import './FoodCards.css';

const FoodCards = () => {
    const foods = useLoaderData([]);
    return (
        <div className='foodBg py-20'>
            <h1 className=' mb-10 text-5xl text-white font-bold'>Welcome to <span className='text-primary'>FoodMart</span>!!!</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    foods.map(food => <Cards
                        key={food.service_id}
                        food={food}
                    />)
                }
            </div>
        </div>
    );
};

export default FoodCards;