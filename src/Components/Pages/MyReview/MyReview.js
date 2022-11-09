import React from 'react';
import ReviewRow from './ReviewRow';

const MyReview = () => {
    return (
        <div>
            <div className="py-10 overflow-auto">
                <table className="table w-full mx-auto">

                    <thead>
                        <tr>
                            <th className='w-2/5'>Customer Name</th>
                            <th className='w-2/5'>Review</th>
                            <th className='w-1/5 ml-0 pl-0'>Delete Review</th>
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