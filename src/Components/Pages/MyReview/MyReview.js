import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../../DynamicTitle/DynamicTitle';
import ReviewRow from './ReviewRow';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const MyReview = () => {
    useTitle('My review');
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch(`https://food-mart-server.vercel.app/review?email=${user?.email}`,)
            .then(res => res.json())
            .then(data => setReview(data));
    }, [user?.email]);
    return (
        <div>
            <div className="py-10 overflow-auto">
                <table className="table w-full mx-auto">

                    <thead>
                        <tr>
                            <th className='w-2/7'>Customer Name</th>
                            <th className='w-2/7'>Service</th>
                            <th className='w-2/7'>Review</th>
                            <th className='w-1/7 ml-0 pl-0'>Delete Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ReviewRow review={review} />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;