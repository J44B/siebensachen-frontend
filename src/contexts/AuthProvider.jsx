import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});

    const checkUser = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/users/me`,
                { withCredentials: true },
            );

            if (response.data && response.data.id) {
                setIsLoggedIn(true);
                setUserData(response.data);
                return response.data;
            } else {
                setIsLoggedIn(false);
                setUserData({});
                return null;
            }
        } catch (error) {
            setIsLoggedIn(false);
            setUserData({});
            console.error(error);
            return null;
        }
    };

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            checkUser();
        }
    }, []);

    const values = {
        isLoggedIn,
        userData,
        setIsLoggedIn,
        setUserData,
        checkUser,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
}
