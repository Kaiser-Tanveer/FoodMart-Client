import React from 'react';

const MyReview = () => {
    return (
        <div>
            <div className="">
                <table className="table w-4/5 mx-auto">

                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Review</th>
                            <th>Delete Review</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="hover">
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td><button className="btn btn-error btn-square btn-outline">X</button></td>
                        </tr>

                        <tr className="hover">
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td><button className="btn btn-error btn-square btn-outline">X</button></td>
                        </tr>

                        <tr className="hover">
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td><button className="btn btn-error btn-square btn-outline">X</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;