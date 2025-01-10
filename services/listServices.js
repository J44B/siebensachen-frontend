// functions to handle lists

import axios from 'axios';
import Cookies from 'js-cookie';

// fetch lists
export async function fetchEventLists(eventId) {
    try {
        console.log(`Fetching lists for eventId: ${eventId}`);
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/lists/${eventId}`,
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching event lists:', error);
        throw error;
    }
}

// delete list

export async function deleteList(listId) {
    try {
        const token = Cookies.get('token');
        const response = await axios.delete(
            `${import.meta.env.VITE_API_URL}/lists/${listId}`,
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
