/*

TODOS

- add filters for category and sub-category

*/

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Item } from '../components/indexComponents.js';

function ItemsPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [typedItem, setTypedItem] = useState('');

    function handleChange(e) {
        setTypedItem(e.target.value);
    }

    async function addNewGlobalItem() {
        try {
            const addItemResponse = await axios.post(
                `${import.meta.env.VITE_API_URL}/items`,
                { title: typedItem },
            );
            const addedItem = addItemResponse.data;
            const fetchItemResponse = await axios.get(
                `${import.meta.env.VITE_API_URL}/items/${addedItem.id}`,
            );
            const fullItem = fetchItemResponse.data;
            setItems((prevItems) => [...prevItems, fullItem]);
            setTypedItem('');
        } catch (error) {
            console.error('Error adding or fetching item:', error);
        }
    }

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/items`,
                );
                setItems(response.data);

                setLoading(false);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    // setError(true);
                } else {
                    console.error('Error fetching item data:', error);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchItems();
    }, []);

    if (loading) return <p>ItemsPage says: Loading...</p>;
    if (error) return <p>ItemsPage says: Error loading item.</p>;
    if (!items) return <p>ItemsPage says: Could not fetch items.</p>;

    return (
        <div className="">
            <div id="heading">
                <h1 className="border-b-2 text-center text-2xl font-bold text-[#3C3D37] sm:text-3xl">
                    Global items
                </h1>
            </div>
            <div id="addItem-section">
                <label
                    htmlFor="input"
                    className="block text-sm font-medium text-gray-900"
                >
                    {' '}
                </label>
                <div
                    id="input-with-button-group"
                    className="flex flex-row justify-between items-center mt-4"
                >
                    <div className="relative">
                        <input
                            type="text"
                            id="intem-input"
                            className="p-4 w-full rounded border-[#173B45] pe-10 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0"
                            placeholder="Type item name"
                            value={typedItem}
                            onChange={handleChange}
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
                            onClick={addNewGlobalItem}
                        >
                            <span className="text-sm font-medium"> Add </span>
                        </button>
                    </div>
                </div>
            </div>
            <div
                id="item-list"
                className="mt-4 space-y-1 border border-solid border-[#173B45] rounded p-2"
            >
                {items.length > 0 ? (
                    items.map((item) => <Item key={item.id} item={item} />)
                ) : (
                    <p>No items found.</p>
                )}
            </div>
        </div>
    );
}

export default ItemsPage;
