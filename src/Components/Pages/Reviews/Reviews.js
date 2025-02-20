import { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../DynamicTitle/DynamicTitle';
import MyReview from '../MyReview/MyReview';

const Reviews = () => {
    const { _id, title, price } = useLoaderData();
    useTitle('Reviews');
    
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        if (user?.email) {
            fetch(`https://food-mart-server.vercel.app/review?email=${user.email}`)
                .then(res => res.json())
                .then(data => setReview(data));
        }
    }, [user?.email]);

    // Review Handler 
    const reviewHandler = e => {
        e.preventDefault();
        setLoading(true);
        
        const form = e.target;
        const name = `${form.fName.value} ${form.lName.value}`;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const message = form.message.value;
        form.reset();

        const newReview = {
            service: _id,
            serviceName: title,
            photoURL,
            price,
            customer: name,
            email,
            message
        };

        // Adding review data to MongoDB 
        fetch('https://food-mart-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            setReview([...review, newReview]);
        })
        .catch(err => {
            setLoading(false);
            console.error(err);
        });
    };

    return (
        <>
            {review.length > 0 ? (
                <div className='my-10'>
                <h3 className='text-2xl font-bold'>My Review</h3>
                <MyReview review={review} />
                </div>
            ) : (
                <div className='pt-10 w-full p-12 mx-auto my-10 shadow-xl rounded-lg border border-primary border-opacity-20'>
                    <h1 className='text-5xl font-bold'>Add Your <span className='text-primary'>Review</span> Here..</h1>
                    <form onSubmit={reviewHandler}>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-10'>
                            <input name="fName" type="text" placeholder="First Name" className="input input-bordered input-primary w-full" required />
                            <input name="lName" type="text" placeholder="Last Name" className="input input-bordered input-primary w-full" required />
                            <input name="photoURL" type="text" placeholder="Photo URL" defaultValue={user?.photoURL} className="input input-bordered input-primary w-full" readOnly />
                            <input name="email" type="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered input-primary w-full" readOnly />
                        </div>
                        <textarea name="message" className="textarea textarea-primary w-full mb-8" placeholder="Your Message" required />
                        <input
                            type="submit"
                            name="submit"
                            className={`btn mb-10 flex mx-auto ${!user?.email ? 'btn-disabled' : 'btn-primary text-white'}`}
                            value={loading ? "Submitting..." : "Submit"}
                            disabled={!user?.email || loading}
                        />
                        {loading && <span className="loading loading-spinner text-primary mx-auto"></span>}
                        {
                            !user?.email && <p className='text-xl text-primary'>Please Login to Add Review</p>
                        }
                    </form>
                </div>
            )}
        </>
    );
};

export default Reviews;
