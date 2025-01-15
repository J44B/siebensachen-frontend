import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAuth } from '../contexts/AuthProvider.jsx';
import userCircle from '../assets/icons/user-circle.svg';
import userCircleCheck from '../assets/icons/user-circle-check.svg';

function UserMenu() {
    /* Todos 
    
    - toggle dropdown
        - open/close menu when
            - clicking button [x]
            - clicking outside > useRef []
            - navigating away (clicking menu item) [x]
    - handle state for entry "login/logout" []
    - handle state for icon [x]
    
    */

    const [menuOpen, setMenuOpen] = useState(false);
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const [icon, setIcon] = useState(userCircle);
    const navigate = useNavigate();
    const menuRef = useRef();

    // Update icon based on login status
    useEffect(() => {
        // console.log('isLoggedIn changed:', isLoggedIn);
        setIcon(isLoggedIn ? userCircleCheck : userCircle);
    }, [isLoggedIn]);

    // Toggle dropdown menu
    const toggleDropdown = () => {
        setMenuOpen((prevState) => !prevState);
    };

    // Close the dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    // Handle logout

    const handleLogout = () => {
        Cookies.remove('token');
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <div className="flex flex-col items-center">
            <div>
                <button
                    id="user-circle"
                    className="flex items-center justify-between text-gray-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    onClick={toggleDropdown}
                >
                    <img src={icon} alt="profile" width={32} height={32} />
                </button>
                {menuOpen && (
                    <div className="absolute mt-2 p-2" role="menu">
                        <ul className="flex flex-col">
                            {isLoggedIn ? (
                                <>
                                    <Link
                                        to="/profile"
                                        className="py-2 text-sm text-gray-500 hover:text-gray-700"
                                        role="menuitem"
                                        onClick={toggleDropdown}
                                    >
                                        Profile
                                    </Link>
                                    <a
                                        href="#"
                                        className="py-2 text-sm text-gray-500 hover:text-gray-700"
                                        role="menuitem"
                                        onClick={handleLogout}
                                    >
                                        Log out
                                    </a>
                                </>
                            ) : (
                                <Link
                                    to="/login"
                                    className="py-2 text-sm text-gray-500 hover:text-gray-700"
                                    role="menuitem"
                                    onClick={toggleDropdown}
                                >
                                    Log In
                                </Link>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserMenu;
