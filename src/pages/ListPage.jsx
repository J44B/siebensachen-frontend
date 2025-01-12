import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { ListItem, Autocomplete } from '../components/indexComponents.js';

function ListPage() {
    const { eventId, listId } = useParams();
    const [list, setList] = useState(null);
    const [listItems, setListItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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
        async function fetchListItems() {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/listitems/${listId}`,
            );
            setListItems(response.data);
            setLoading(false);
        }
        fetchListItems();
    }, [listId]);

    if (loading) return <p>ListPage says: Loading...</p>;
    if (error) return <p>ListPage says: Error loading list.</p>;
    if (!list) return <p>ListPage says: List not found.</p>;
    if (!listItems) return <p>ListPage says: Items not found.</p>;

    return (
        <>
            <div id="heading">
                <h1 className="border-b-2 text-center text-2xl font-bold text-[#3C3D37] sm:text-3xl">
                    {list.title}
                </h1>
            </div>
            <div id="autocomplete" className="mt-4">
                <Autocomplete />
            </div>
            <div
                id="item-list"
                className="mt-4 space-y-1 border border-solid border-[#173B45] rounded p-2"
            >
                {listItems.length > 0 ? (
                    listItems.map((listItem) => (
                        <ListItem key={listItem.id} item={listItem.Item} />
                    ))
                ) : (
                    <p>No items found.</p>
                )}
            </div>
        </>
    );
}

export default ListPage;
