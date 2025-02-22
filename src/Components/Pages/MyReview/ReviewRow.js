import React, { useState } from 'react';
import ChildRow from './ChildRow';

const ReviewRow = ({ reviews = [], setReviews }) => {
    const [showAll, setShowAll] = useState(false);
    
    // Limit reviews to 5 initially
    const visibleReviews = showAll ? reviews : reviews.slice(0, 5);

    const deleteHandler = id => {
        const proceed = window.confirm('Are you sure you want to delete this review?');
        if (proceed) {
            fetch(`https://food-mart-server.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Review deleted successfully!');
                    setReviews(prevReviews => prevReviews.filter(view => view._id !== id));
                }
            })
            .catch(error => console.error("Error deleting review:", error));
        }
    };

    return (
        <>
            {visibleReviews.length > 0 ? (
                visibleReviews.map(view => (
                    <ChildRow 
                        key={view._id} 
                        view={view} 
                        deleteHandler={deleteHandler} 
                    />
                ))
            ) : (
                <tr>
                    <td colSpan="4" className="text-center p-4">No reviews found.</td>
                </tr>
            )}

            {/* Show button only if there are more than 5 reviews */}
            {reviews.length > 5 && !showAll && (
                <tr>
                    <td colSpan="4" className="text-center p-4">
                        <button 
                            onClick={() => setShowAll(true)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            See More Reviews
                        </button>
                    </td>
                </tr>
            )}
        </>
    );
};

export default ReviewRow;
