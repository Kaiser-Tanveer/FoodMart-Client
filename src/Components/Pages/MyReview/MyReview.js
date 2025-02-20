import React from 'react';
import useTitle from '../../../DynamicTitle/DynamicTitle';
import ReviewRow from './ReviewRow';

const MyReview = () => {
    useTitle('My review')
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
                        <ReviewRow />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;