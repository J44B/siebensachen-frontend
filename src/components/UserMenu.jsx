import userCircle from '../assets/icons/user-circle.svg';

function UserMenu({ setMenuOpen, MenuOpen }) {
    const toggleDropdown = () => {
        setMenuOpen(true);
    };
    return (
        <div className="flex flex-col items-center">
            <div>
                <button
                    id="user-circle"
                    className="flex items-center justify-between text-gray-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    onClick={toggleDropdown}
                >
                    <img
                        src={userCircle}
                        alt="profile"
                        width={32}
                        height={32}
                    />
                </button>
                {MenuOpen && (
                    <div className="absolute mt-2 p-2" role="menu">
                        <ul className="flex flex-col">
                            <a
                                href="/profile"
                                className="py-2 text-sm text-gray-500  hover:text-gray-700"
                                role="menuitem"
                                onClick={(setMenuOpen = false)}
                            >
                                Profile
                            </a>
                            <a
                                href="#"
                                className="py-2 text-sm text-gray-500  hover:text-gray-700"
                                role="menuitem"
                            >
                                Log out
                            </a>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserMenu;
