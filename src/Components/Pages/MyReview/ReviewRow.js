import React from 'react';
import ChildRow from './ChildRow';

const ReviewRow = ({review, setReview}) => {
    const deleteHandler = id => {
        const proceed = window.confirm('Sure to delete this review!!!')
        if (proceed) {
            fetch(`https://food-mart-server.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('deleted successfully!')
                        const remaining = review.filter(view => view._id !== id);
                        setReview(remaining);
                    }
                    console.log(data);
                })
        }
    }
    return (
        <>
            {
                review.map(view => <ChildRow
                    key={view._id}
                    view={view}
                    deleteHandler={deleteHandler}
                />)
            }
        </>
    );
};

export default ReviewRow;