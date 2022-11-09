import { Warning } from 'postcss';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import MyReview from '../MyReview/MyReview';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const { _id, title, price } = useLoaderData();

    // Review Handler 
    const reviewHandler = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.fName.value} ${form.lName.value}`;
        const email = form.email.value;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            message
        }
        console.log(review);

        // Warning...
        // Creating review data for MongoDB 
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                return console.log(data);
            })
            .catch(err => console.error(err));
    };



    return (
        <>
            <div className='pt-10 w-4/5 mx-auto'>
                <h1 className='text-5xl font-bold'>Add Your <span className='text-primary'>Review</span> Here..</h1>
                <form onSubmit={reviewHandler}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-10'>
                        <input name="fName" type="text" placeholder="First Name" className="input input-bordered input-primary w-full" />
                        <input name="lName" type="text" placeholder="Last Name" className="input input-bordered input-primary w-full" />
                    </div>
                    <input name="email" type="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered input-primary w-full mb-10" readOnly />
                    <textarea name="message" className="textarea textarea-primary w-full mb-8" placeholder="Your Message" />
                    <input type="submit" className='btn btn-primary text-white mb-10 flex mx-auto' value="Submit" />
                </form>
            </div>
            <MyReview />
        </>
    );
};

export default Reviews;