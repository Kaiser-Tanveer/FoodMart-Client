import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FoodMenu = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div>
            {
                foods.map(food => <Link className='px-7 hover:underline'
                    key={food.service_id}
                    food={food} to={`/services/${food._id}`}
                >
                    <p className='block lg:inline-flex'>{food.title}</p>
                </Link>)
            }
        </div>
    );
};

export default FoodMenu;