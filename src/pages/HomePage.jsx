/*

- fetch events [x]
- display event cards [x]

*/

import { useState, useEffect } from 'react';
import axios from 'axios';
import { EventCard } from '../components/indexComponents.js';
import { deleteEvent } from '../../services/eventServices.js';

function HomePage() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/events`,
                );
                setEvents(response.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
                console.error(error);
            }
        };
        fetchEvents();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return (
            <div className="h-screen flex justify-center items-center">
                <p className="text-red-500">
                    Error loading events. Please try again later.
                </p>
            </div>
        );
    }

    const handleDelete = async (eventId) => {
        const confirmed = window.confirm(
            'Are you sure you want to delete this event?',
        );
        if (!confirmed) return;

        try {
            await deleteEvent(eventId);
            setEvents((prevEvents) =>
                prevEvents.filter((event) => event.id !== eventId),
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {events.length > 0 ? (
                events.map((event) => (
                    <EventCard
                        key={event.id}
                        event={event}
                        onDelete={() => handleDelete(event.id)}
                    />
                ))
            ) : (
                <p>No events found.</p>
            )}
        </div>
    );
}

export default HomePage;
