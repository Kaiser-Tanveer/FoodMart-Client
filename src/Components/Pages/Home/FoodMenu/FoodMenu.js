import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FoodMenu = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('https://food-mart-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div className="flex overflow-x-auto whitespace-nowrap space-x-4 px-2 py-8 bg-primary text-white">
            {foods.map((food) => (
                <Link 
                    key={food?.service_id}
                    to={`/services/${food._id}`}
                    className="px-4 py-2 border rounded hover:bg-blue-600 flex-shrink-0"
                >
                    {food.title}
                </Link>
            ))}
        </div>
    );
};

export default FoodMenu;