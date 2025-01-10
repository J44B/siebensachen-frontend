import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { ListItem } from '../components/indexComponents.js';

function ItemsPage() {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/items`,
                );
                setItems(response.data);

                setLoading(false);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setError(true);
                } else {
                    console.error('Error fetching item data:', error);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchItems();
    }, [id]);

    if (loading) return <p>ItemsPage says: Loading...</p>;
    if (error) return <p>ItemsPage says: Error loading item.</p>;
    if (!items) return <p>ItemsPage says: Could not fetch items.</p>;

    return (
        <>
            <div id="heading">
                <h1 className="text-center text-2xl font-bold text-[#3C3D37] sm:text-3xl">
                    Items
                </h1>
            </div>
            <div id="item-list" className="space-y-1">
                {items.length > 0 ? (
                    items.map((item) => <ListItem key={item.id} item={item} />)
                ) : (
                    <p>No items found.</p>
                )}
            </div>
        </>
    );
}

export default ItemsPage;
