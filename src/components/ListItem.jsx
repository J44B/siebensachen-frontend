import { Checkbox } from '../components/indexComponents.js';
import { useState } from 'react';
import axios from 'axios';

function ListItem({ list, item, onDelete }) {
    const [isChecked, setIsChecked] = useState(item.isChecked || false);

    console.log('ITEM:', item);
    const handleCheckboxChange = async (checked) => {
        setIsChecked(checked);
        try {
            await axios.put(
                `${import.meta.env.VITE_API_URL}/listitems/${list.id}/${
                    item.id
                }`,
                {
                    isChecked: checked,
                },
            );
        } catch (error) {
            console.error('Error updating checkbox state:', error);
        }
    };

    if (!item) return <p>ListItem says: Could not fetch item.</p>;

    return (
        <>
            <div
                id="item"
                className="flex flex-row items-center border border-[#173B45] rounded p-1 justify-between"
            >
                <div id="item-name" className="mr-4">
                    {item.title}
                </div>

                <div
                    id="button-group"
                    className="flex flex-row items-center space-x-2"
                >
                    <label
                        htmlFor="Check"
                        className="flex cursor-pointer items-start gap-4"
                    >
                        <Checkbox
                            isChecked={isChecked}
                            checkHandler={(e) =>
                                handleCheckboxChange(e.target.checked)
                            }
                        />
                    </label>
                    <span className="inline-flex overflow-hidden rounded-md border  shadow-sm">
                        <button
                            className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                            title="Delete item (currently not available)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-4"
                                onClick={onDelete}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>
                    </span>
                </div>
            </div>
        </>
    );
}

export default ListItem;
