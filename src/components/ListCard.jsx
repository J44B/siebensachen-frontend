import { Link } from 'react-router-dom';

function ListCard({ list }) {
    console.log(list);
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
            <Link to={`/list/${list.id}`}>
                <div id="title">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                        {list.title}
                    </h3>
                </div>
            </Link>
        </div>
    );
}

export default ListCard;
