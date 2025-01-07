import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import axios from 'axios';

function EventCard() {
    const { id } = useParams;
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchEventById = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/events/${id}`,
                );
                setEvent(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
                console.error(error);
            }
        };
        fetchEventById();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading event. Try again later.</p>;
    }

    if (!event) {
        return <p>Event not found.</p>;
    }

    return (
        <article className="flex bg-white transition hover:shadow-xl">
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                    datetime="2022-10-10"
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >
                    <span>2022</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>Oct 10</span>
                </time>
            </div>

            <div className="hidden sm:block sm:basis-56">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    className="aspect-square h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#">
                        <h3 className="font-bold uppercase text-gray-900">
                            Finding the right guitar for your style - 5 tips
                        </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae dolores, possimus pariatur animi
                        temporibus nesciunt praesentium dolore sed nulla ipsum
                        eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque
                        dignissimos. Molestias explicabo corporis voluptatem?
                    </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                    <a
                        href="#"
                        className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                    >
                        Read Blog
                    </a>
                </div>
            </div>
        </article>
    );
}

export default EventCard;
