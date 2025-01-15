// services for items

import { useEffect } from 'react';
import axios from 'axios';

export function useDatabaseItems() {
    useEffect(() => {
        async function fetchDatabaseItems() {
            await axios.get(`${import.meta.env.VITE_API_URL}/items`);
        }
        fetchDatabaseItems();
    }, []);
}

// add listItem to table ListItems

export async function handleAddItem(listId, listItems, setListItems, newItem) {
    try {
        const postItem = await axios.post(
            `${import.meta.env.VITE_API_URL}/listitems/${listId}/${newItem.id}`,
            { item_id: newItem.id },
        );

        const insertedItem = postItem.data;
        setListItems((prevItems) => [...prevItems, { Item: insertedItem }]);
    } catch (error) {
        console.error('Error adding item:', error);
    }
}
