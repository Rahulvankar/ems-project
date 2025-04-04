import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorege, SetLocalStorege } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    // localStorage.clear()
    useEffect(() => {
        SetLocalStorege();
        const { employees } = getLocalStorege();
        setUserData(employees);
    }, [])

    return (
        <div>
            <AuthContext.Provider value={[userData, setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
