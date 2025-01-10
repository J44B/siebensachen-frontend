import { Link } from 'react-router';
import backpack from '../assets/icons/backpack.svg';
import list from '../assets/icons/list.svg';
import search from '../assets/icons/magnifying-glass.svg';
import { useState } from 'react';
import { UserMenu } from './indexComponents.js';

function Header() {
    const [MenuOpen, setMenuOpen] = useState(false);
    return (
        <header className="border-b border-gray-500 bg-[#B7E0FF]">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                    <div
                        id="logo-container"
                        className="flex flex-row items-center"
                    >
                        <img
                            src={backpack}
                            alt="backpack"
                            width={48}
                            height={48}
                        />
                        <div className="flex flex-col">
                            <Link to={'/'}>
                                <h1 className="text-base font-bold text-gray-900 sm:text-3xl">
                                    siebensachen
                                </h1>
                            </Link>
                            <p className="mt-1 text-xs text-gray-600">
                                The pack list for the overwhelmed
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    id="header-buttons"
                    className="flex flex-row gap-2 m-2 mx-4"
                >
                    {/* <button
                        id="search"
                        className="inline-block text-gray-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        href="#"
                    >
                        <img src={search} alt="search" width={32} height={32} />
                    </button> */}
                    <UserMenu MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
                    <button
                        id="menu-button"
                        className="inline-block text-gray-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        href="#"
                    >
                        <img src={list} alt="menu" width={32} height={32} />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
