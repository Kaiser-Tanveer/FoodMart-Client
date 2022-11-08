import { useLoaderData } from 'react-router-dom';
import Cards from './Cards';

const FoodCards = () => {
    const foods = useLoaderData([]);
    return (
        <div>
            <h1>{foods.length}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto justify-center items-center text-center'>
                {
                    foods.map(food => <Cards />)
                }
            </div>
        </div>
    );
};

export default FoodCards;