/*

- fetch events
- display event cards

*/

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { EventCard } from '../components/indexComponents.js';

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

    return (
        <div>
            {events?.map((event) => (
                <EventCard key={event.id} data={event} />
            ))}
        </div>
    );
}

export default HomePage;
