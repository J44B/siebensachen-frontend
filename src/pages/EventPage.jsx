import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { EventForm } from '../components/indexComponents.js';

function EventPage() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchEvent() {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/events/${id}`,
                );
                setEvent(response.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
                console.error(error);
            }
        }
        fetchEvent();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading event. Try again later.</p>;
    if (!event) return <p>Event not found.</p>;

    return <EventForm eventData={event} />;
}

export default EventPage;
