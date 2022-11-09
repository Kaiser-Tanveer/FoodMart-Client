import React, { createContext } from 'react';

// Creating AuthContext 
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const user = { name: 'kaiser', age: 22 }
    const authValue = { user }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;