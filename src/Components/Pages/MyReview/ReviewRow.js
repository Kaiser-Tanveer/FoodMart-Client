import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import ChildRow from './ChildRow';

const ReviewRow = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReview(data));
    }, [user?.email]);
    // console.log(review);

    const deleteHandler = id => {
        const proceed = window.confirm('Sure to delete this review!!!')
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('deleted seccessfully!')
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