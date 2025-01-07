/*

- fetch events
- display event cards

*/

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { EventCard } from '../components/indexComponents.js';

function HomePage() {
    const [events, setevents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const MAX_CONTENT_LENGTH = 150;

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/events`,
                );
                const reversedEvents = response.data.reverse();
                setEvents(reversedEvents);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
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
                    Error loading posts. Please try again later.
                </p>
            </div>
        );
    }

    return <h1>These are my events!</h1>;
}

export default HomePage;
