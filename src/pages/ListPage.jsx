import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import { ListItem, Autocomplete } from '../components/indexComponents.js';

function ListPage() {
    const navigate = useNavigate();
    const { eventId, listId } = useParams();
    const [currentEventId, setCurrentEventId] = useState(eventId);
    const [list, setList] = useState(null);
    const [listItems, setListItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [listError, setlistError] = useState(false);
    const [itemsError, setItemsError] = useState(false);

    async function handleAddItem(listId, listItems, setListItems, newItem) {
        console.log('New Item: ', newItem);
        try {
            const addItem = await axios.post(
                `${import.meta.env.VITE_API_URL}/listitems/${listId}/${
                    newItem.id
                }`,
                { item_id: newItem.id },
            );
            console.log('LOG addItem: ', addItem);
            const addedItem = addItem.data;
            console.log('LOG addedItem: ', addedItem);
            setListItems((prevItems) => [
                ...prevItems,
                { Item: { title: addedItem.recall.Item.title } },
            ]);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    }

    function handleAddItemFromAutocomplete(newItem) {
        handleAddItem(listId, listItems, setListItems, newItem);
    }

    async function handleDeleteItem(itemId) {
        try {
            await axios.delete(
                `${import.meta.env.VITE_API_URL}/listitems/${listId}/${itemId}`,
            );
            setListItems((prevItems) =>
                prevItems.filter((item) => item.id !== itemId),
            );
        } catch (error) {
            console.error('Error deleting item:', error);
        }
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
                    // setlistError(error);
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
                    // setItemsError(error);
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
                        <ListItem
                            key={listItem.id}
                            item={listItem.Item}
                            onDelete={() => handleDeleteItem(listItem.id)}
                        />
                    ))
                ) : (
                    <p>No items found.</p>
                )}
            </div>
            <button
                onClick={() => navigate(`/events/${currentEventId}`)}
                className="mt-4 block rounded-lg bg-gray-50 px-5 py-3 text-base font-medium text-[#697565] hover:bg-[#FF8225] hover:text-slate-100 active:bg-[#FF8225]"
            >
                Back
            </button>
        </>
    );
}

export default ListPage;
