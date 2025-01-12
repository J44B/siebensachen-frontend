import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { ListItem, Autocomplete } from '../components/indexComponents.js';

function ListPage() {
    const { eventId, listId } = useParams();
    const [list, setList] = useState(null);
    const [listItems, setListItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [listError, setlistError] = useState(false);
    const [itemsError, setItemsError] = useState(false);

    async function handleAddItem(listId, listItems, setListItems, newItem) {
        try {
            const addItem = await axios.post(
                `${import.meta.env.VITE_API_URL}/listitems/${listId}/${
                    newItem.id
                }`,
                { item_id: newItem.id },
            );

            const addedItem = addItem.data;
            setListItems((prevItems) => [...prevItems, { Item: addedItem }]);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    }

    function handleAddItemFromAutocomplete(newItem) {
        handleAddItem(listId, listItems, setListItems, newItem);
    }

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
                    setlistError(error);
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
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/listitems/${listId}`,
                );

                setListItems(response.data);

                setLoading(false);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setItemsError(error);
                } else {
                    console.error('Error fetching event list data:', error);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchListItems();
    }, [listId]);

    if (loading) return <p>ListPage says: Loading...</p>;
    if (listError) return <p>ListPage says: Error loading list.</p>;
    if (itemsError) return <p>ListPage says: Error loading items.</p>;
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
                <Autocomplete
                    onAddItem={handleAddItemFromAutocomplete}
                    listId={listId}
                />
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
