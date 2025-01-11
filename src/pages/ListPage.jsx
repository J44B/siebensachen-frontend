import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import { ListItem } from '../components/indexComponents.js';

function ListPage() {
    const { eventId, listId } = useParams();
    const [list, setList] = useState(null);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    console.log('EventId: ', eventId, 'ListID: ', listId);

    // fetch list

    useEffect(() => {
        async function fetchList() {
            try {
                const response = await axios.get(
                    `${
                        import.meta.env.VITE_API_URL
                    }/lists/${eventId}/${listId}`,
                );

                setList(response.data);

                setLoading(false);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setError(true);
                } else {
                    console.error('Error fetching event data:', error);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchList();
    }, [eventId, listId]);

    // fetch items

    useEffect(() => {
        async function fetchItems() {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/listitems/${listId}`,
            );
            setItems(response.data);
            setLoading(false);
        }
        fetchItems();
    }, [listId]);

    if (loading) return <p>ListPage says: Loading...</p>;
    if (error) return <p>ListPage says: Error loading list.</p>;
    if (!list) return <p>ListPage says: List not found.</p>;
    if (!items) return <p>ListPage says: Items not found.</p>;

    return (
        <>
            <div id="heading">
                <h1 className="text-center text-2xl font-bold text-[#3C3D37] sm:text-3xl">
                    {list.title}
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

export default ListPage;
