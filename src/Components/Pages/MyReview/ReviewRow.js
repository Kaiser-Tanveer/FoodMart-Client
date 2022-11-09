import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const ReviewRow = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReview(data));
    }, [user?.email]);
    console.log(review);
    return (
        <>
            {
                review.map(view => <tr
                    key={view._id}
                    className="hover">
                    <td>{view.customer}</td>
                    <td>{view.message}</td>
                    <td><button className="btn btn-error btn-square btn-outline">X</button></td>
                </tr>)
            }
        </>
    );
};

export default ReviewRow;