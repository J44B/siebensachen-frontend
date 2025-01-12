/*

TODOS

add error handling

*/

import { useState, useEffect } from 'react';
import axios from 'axios';

function Autocomplete({ onAddItem, listId }) {
    const [globalItems, setGlobalItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');

    useEffect(() => {
        async function fetchGlobalItems() {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/items`,
            );
            setGlobalItems(response.data);
        }
        fetchGlobalItems();
    }, []);

    function handleSelectedItem(e) {
        setSelectedItem(e.target.value);
    }

    function handleAddButtonClick() {
        const item = globalItems.find((item) => item.title === selectedItem);
        if (item) {
            onAddItem(item, listId);
        } else {
            console.error('Selected item not found in global items.');
        }
    }

    return (
        <div>
            <label
                htmlFor="autocomplete-items"
                className="block text-sm font-medium text-gray-900"
            >
                {' '}
            </label>
            <div
                id="select-with-button-group"
                className="flex flex-row justify-between items-center mt-4"
            >
                <div className="relative">
                    <input
                        type="text"
                        list="globalItems"
                        id="items"
                        className="p-4 w-full rounded border-[#173B45] pe-10 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0"
                        placeholder="Type or select item"
                        value={selectedItem}
                        onChange={handleSelectedItem}
                    />

                    <span className="absolute inset-y-0 end-0 flex w-8 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                            />
                        </svg>
                    </span>
                </div>

                <div>
                    <button
                        className="border border-current rounded px-4 ml-4 py-4 text-[#697565] hover:bg-[#FF8225] hover:text-slate-100 active:bg-[#FF8225]"
                        type="button"
                        onClick={handleAddButtonClick}
                    >
                        <span className="text-sm font-medium"> Add </span>
                    </button>
                </div>
            </div>
            <datalist name="items" id="globalItems">
                {globalItems.map((item) => (
                    <option key={item.id} value={item.title} />
                ))}
            </datalist>
        </div>
    );
}

export default Autocomplete;
