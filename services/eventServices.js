// collection of functions to handle various event actions

import axios from 'axios';
import Cookies from 'js-cookie';

export async function deleteEvent(eventId) {
    try {
        const token = Cookies.get('token');
        const response = await axios.delete(
            `${import.meta.env.VITE_API_URL}/events/${eventId}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            },
        );

        return response;
    } catch (error) {
        console.error('Error deleting event:', error);
        throw error;
    }
}
