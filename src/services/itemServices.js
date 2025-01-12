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
