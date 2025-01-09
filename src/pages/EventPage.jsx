import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { EventForm } from '../components/indexComponents.js';
import { fetchEventLists } from '../../services/listServices.js';

function EventPage() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchEventData() {
            try {
                console.log(`Fetching event data for id: ${id}`);
                // Fetch event details
                const eventResponse = await axios.get(
                    `${import.meta.env.VITE_API_URL}/events/${id}`,
                );
                console.log('Event response:', eventResponse.data);
                setEvent(eventResponse.data);

                // Fetch event lists
                console.log('Fetching event lists');
                const listsData = await fetchEventLists(id);
                console.log('Lists data:', listsData);
                setLists(listsData);

                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
                console.error(error);
            }
        }
        fetchEventData();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading event. Try again later.</p>;
    if (!event) return <p>Event not found.</p>;

    // implement delete list

    return (
        <div id="main-container" className="">
            <div id="event-container">
                <EventForm eventData={event} lists={lists} />
            </div>
        </div>
    );
}

export default EventPage;
