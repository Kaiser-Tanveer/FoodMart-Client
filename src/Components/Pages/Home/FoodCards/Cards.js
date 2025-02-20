import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLoading } from '../../../../Contexts/AuthProvider/DetailsLoadingProvider';

const Cards = ({ food }) => {
    const { img, title, description, price } = food;
    const { loading } = useLoading();
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };

    return (
        <div className="card w-full h-full mx-auto image-full border border-gray-300 shadow-xl shadow-gray-700">
            <figure><img src={img} alt="foods" /></figure>
            <div className="card-body">
                <h2 className="text-xl font-bold text-center">{title}</h2>
                <p>
                    {description.length > 100 ? description.slice(0, 100) + '...' : description}
                </p>
                <div className="card-actions justify-between items-center">
                    <h4>Price: ৳{price}</h4>

                    {loading || clicked ? (
                        <button className="btn btn-primary border border-gray-300 loading">Loading...</button>
                    ) : (
                        <Link to={`/services/${food._id}`} onClick={handleClick}>
                            <button className="btn btn-primary border border-gray-300">More Details</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cards;
