import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ food }) => {
    const { img, title, description, price } = food;
    return (
        <div className="card w-full h-full mx-auto image-full border border-white shadow-xl shadow-gray-700">
            <figure><img src={img} alt="foods" /></figure>
            <div className="card-body">
                <h2 className="text-xl font-bold text-center">{title}</h2>
                <p>
                    {
                        description.length > 100 ? description.slice(0, 100) + '...' : description
                    }
                </p>
                <div className="card-actions justify-between items-center">
                    <h4>Price: ৳{price}</h4>
                    <Link to={`/services/${food._id}`}><button className="btn btn-primary">More Details</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Cards;