import React from 'react';

const ChildRow = ({ view, deleteHandler }) => {
    const { _id, customer, serviceName, message } = view;


    return (
        <>
            {
                !_id ? <h1 className='text-xl text-primary'>No Review Added Yet!</h1>
                    :
                    <tr
                        className="hover">
                        <td>{customer}</td>
                        <td>{serviceName}</td>
                        <td>{message}</td>
                        <td><button onClick={() => deleteHandler(view._id)} className="btn-sm btn-error btn-square rounded-md border border-error btn-outline">X</button>
                            <p>{view.length}</p></td>
                    </tr>
            }
        </>
    );
};

export default ChildRow;