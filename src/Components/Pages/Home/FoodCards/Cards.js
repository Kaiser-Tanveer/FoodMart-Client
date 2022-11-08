import React from 'react';

const Cards = ({ food }) => {
    console.log(food);
    const { img, title, description, price, review } = food;
    return (
        <div className="card lg:w-2/3 mx-auto bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                    {
                        description.length > 100 ? description.slice(0, 100) : description
                    }
                </p>
                <div className="card-actions justify-between items-center">
                    <h4>Price: ${price}</h4>
                    <button className="btn btn-primary">More Details</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;