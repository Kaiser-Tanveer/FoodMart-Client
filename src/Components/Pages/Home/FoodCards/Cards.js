import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ food }) => {
    console.log(food);
    const { img, title, description, price, _id } = food;
    return (
        <div className="card w-4/5 mx-auto image-full border border-white">
            <figure><img src={img} alt="foods" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
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