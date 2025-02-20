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
        <div className="flex flex-wrap gap-4">
            {foods.map((food) => (
                <Link key={food?.service_id}
                    to={`/services/${food._id}`}
                    className='px-4 py-2 border rounded hover:bg-blue-600 inline-flex'
                >
                    {food.title}
                </Link>
            ))}
        </div>

    );
};

export default FoodMenu;