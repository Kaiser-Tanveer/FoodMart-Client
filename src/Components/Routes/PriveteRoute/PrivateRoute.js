import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // Loading is being set 
    if (loading) {
        return <><button className="btn loading">loading</button></>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/logIn' state={{ from: location }} replace />
    return (
        <div>

        </div>
    );
};

export default PrivateRoute;