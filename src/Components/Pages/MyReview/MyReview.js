import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../../DynamicTitle/DynamicTitle';
import ReviewRow from './ReviewRow';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const MyReview = () => {
    useTitle('My review');
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // fetch(`https://food-mart-server.vercel.app/review?email=${user?.email}`,)
        fetch(`https://food-mart-server.vercel.app/review?`,)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [user?.email]);
    return (
        <div>
            <div className="pb-10 overflow-auto">
            <h1 className="text-3xl font-bold mt-10 mb-4">All Reviews</h1>
                <table className="table w-full mx-auto">
                    <thead>
                        <tr>
                            <th className='w-2/7'>Customer Name</th>
                            <th className='w-2/7'>Service</th>
                            <th className='w-2/7'>Review</th>
                            <th className='w-1/7 ml-0 pl-0'>Delete Review</th>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        <ReviewRow reviews={reviews} />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;