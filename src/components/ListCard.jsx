/* TODO 

Opt for useNavigate instead of Link

*/

import { Link, useNavigate } from 'react-router-dom';

function ListCard({ event, list, onDelete }) {
    const navigate = useNavigate();

    if (!list) {
        return <p>List not found.</p>;
    }

    return (
        <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
            <span className="inline-block rounded bg-white p-2 text-black">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                </svg>
            </span>
            <div
                id="title-button-section"
                className="flex flex-row justify-between"
            >
                <Link to={`/lists/${event.id}/${list.id}`}>
                    {/* <Link to={`/lists/${list.id}`}> */}
                    <div id="title">
                        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                            {list.title}
                        </h3>
                    </div>
                </Link>
                <div id="delete-section">
                    <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                        <button
                            onClick={() => onDelete(list.id)}
                            className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                            title="Delete list"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-4"
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
        </div>
    );
}

export default ListCard;
