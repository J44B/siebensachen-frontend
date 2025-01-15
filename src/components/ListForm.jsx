import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';

function ListForm() {
    const navigate = useNavigate();
    const { eventId } = useParams();
    const [formData, setFormData] = useState({
        title: '',
    });

    // handleChange

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    // handle create list

    async function handlecreateList(e) {
        e.preventDefault();

        try {
            const url = `${import.meta.env.VITE_API_URL}/lists/${eventId}`;
            const response = await axios.post(
                url,
                { title: formData.title },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
            if (response.status === 201) {
                navigate(`/events/${eventId}`);
            }
        } catch (error) {
            console.error('Error creating list:', error); // Add proper error handling here}
        }
    }

    return (
        <div className="mx-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-2xl font-bold text-[#3C3D37] sm:text-3xl">
                Create new list
            </h1>
            <div id="form-container" className="mx-auto sm:px-6 lg:px-8">
                <form
                    className="mt-6 space-y-4 rounded-lg p-4 drop-shadow-2xl sm:p-6 lg:p-8 bg-[#697565]"
                    onSubmit={handlecreateList}
                >
                    {/* ---------- Title ---------- */}
                    <div id="title">
                        <label className="sr-only" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Title"
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div
                        id="upper-container"
                        className="grid grid-flow-col gap-4"
                    >
                        {/* ---------- Buttons ---------- */}
                        <div
                            id="button-area"
                            className="flex flex-row-reverse items-end justify-between"
                        >
                            <button
                                type="submit"
                                className="block rounded-lg bg-gray-50 px-5 py-3 text-base font-medium text-[#697565] hover:bg-[#FF8225] hover:text-slate-100 active:bg-[#FF8225]"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => navigate(`/events/${eventId}`)}
                                className="block rounded-lg bg-gray-50 px-5 py-3 text-base font-medium text-[#697565] hover:bg-[#FF8225] hover:text-slate-100 active:bg-[#FF8225]"
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ListForm;
