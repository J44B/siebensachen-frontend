import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import { DetailedEventCard } from '../components/indexComponents.js';
import { ListCard } from '../components/indexComponents.js';

function EventPage() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    // Fetch event
    useEffect(() => {
        async function fetchEvent() {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/events/${id}`,
                );
                setEvent(response.data);

                setLoading(false);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setError(true);
                } else {
                    console.error('Error fetching event data:', error);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchEvent();
    }, [id]);

    // Fetch event lists
    useEffect(() => {
        async function fetchLists() {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/lists/${id}`,
            );
            setLists(response.data || []);
            setLoading(false);
        }
        fetchLists();
    }, [id]);

    if (loading) return <p>EventPage says: Loading...</p>;
    if (error) return <p>EventPage says: Error loading event.</p>;
    if (!event) return <p>EventPage says: Event not found.</p>;

    // implement delete list

    return (
        <div id="main-container" className="">
            <section id="event-card-container">
                <DetailedEventCard event={event} />
            </section>
            <span className="my-4 flex items-center">
                <span className="h-px flex-1 bg-black"></span>
                <span className="shrink-0 px-6">Lists in this event</span>
                <span className="h-px flex-1 bg-black"></span>
            </span>
            <section id="event-list-container">
                <div
                    id="list-card-container"
                    className="mt-4 grid grid-cols-2 gap-4 items-center"
                >
                    {lists.length > 0 ? (
                        lists.map((list) => (
                            <ListCard key={list.id} list={list} />
                        ))
                    ) : (
                        <p>No lists found.</p>
                    )}
                    <div>
                        <button
                            onClick={() => navigate('/list/create-list')}
                            className="inline-block rounded bg-white p-2 text-black px-10 py-10 hover:shadow-lg"
                            href="#"
                        >
                            New list
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EventPage;
