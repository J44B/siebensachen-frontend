/*

TODOS

- Headline "Edit event" []
- Section "Event" []
    - Show detailed event card []
    - Button "Edit details" []
- Section "Lists" []
    - Show List cards []
    - If no lists show "No lists yet" []
    - Button "Add list" []
*/

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { EventForm } from '../components/indexComponents.js';

function EditEventPage() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchEventData() {
            try {
                console.log(`Fetching event data for id: ${id}`);
                // Fetch event details
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/events/${id}`,
                );
                setEvent(response.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                console.error('Error fetching event data:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchEventData();
    }, [id]);

    if (loading) return <p>EditEventPage says: Loading...</p>;
    if (error) return <p>EditEventPage says: Error loading event.</p>;
    if (!event) return <p>EditEventPage says: Event not found.</p>;

    return (
        <div id="main-container" className="">
            <div id="event-container">
                <EventForm eventData={event} />
            </div>
        </div>
    );
}

export default EditEventPage;
