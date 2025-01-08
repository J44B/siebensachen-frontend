/* 

Todos

- form fields for
    - title
    - image url
    - start date
    - end date
    - recurrence
    - button "activate recurrence"
    - description
- buttons
    - create event
        - sends request to backend
        - closes form
        - navigates to SingleEvent page
- design
    - make image, date and recurrence fit nicely
*/
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

function EventForm({ eventData }) {
    const [formData, setFormData] = useState({
        title: '',
        startDate: '',
        endDate: '',
        description: '',
        imageUrl: '',
        recurring: false,
        recurrence_pattern: '',
    });

    useEffect(() => {
        console.log('eventData:', eventData);
        if (eventData) {
            setFormData({
                title: eventData.title || '',
                startDate: eventData.startDate || '',
                endDate: eventData.endDate || '',
                description: eventData.description || '',
                imageUrl: eventData.imageUrl || '',
                recurring: eventData.recurring || false,
                recurrence_pattern: eventData.recurrence_pattern || '',
            });
        }
    }, [eventData]);

    const navigate = useNavigate();

    // handleChange

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    // handle createEvent

    async function handleEventManipulation(e) {
        e.preventDefault();
        try {
            const token = Cookies.get('token');
            const method = eventData ? 'put' : 'post';
            const url = eventData
                ? `${import.meta.env.VITE_API_URL}/events/${eventData.id}`
                : `${import.meta.env.VITE_API_URL}/events/create`;
            const response = await axios[method](
                url,
                {
                    title: formData.title,
                    startDate: formData.startDate,
                    endDate: formData.endDate,
                    description: formData.description,
                    imageUrl: formData.imageUrl,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                },
            );
            if (response.status === 201) {
                navigate('/');
                // toast.success('Event created sucessfully');
            }
        } catch (error) {
            // toast.error(
            //     error.response.data.error || 'Could not create event',
            // );
            console.error(error);
        }
    }

    return (
        <div className="mx-auto max-w-screen-xl sm:px-6 lg:px-8">
            <h1 className="text-center text-2xl font-bold text-[#3C3D37] sm:text-3xl">
                {eventData ? 'Edit event' : 'Create a new event'}
            </h1>
            <div
                id="form-container"
                className="mx-auto max-w-screen-xl sm:px-6 lg:px-8"
            >
                <form
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 drop-shadow-2xl sm:p-6 lg:p-8 bg-[#697565]"
                    onSubmit={handleEventManipulation}
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
                        className="grid grid-cols-2 grid-rows-3 gap-4"
                    >
                        {/* ---------- Image ---------- */}
                        <div id="left-img-container" className="span-rows-3">
                            <label className="sr-only" htmlFor="image-url">
                                Upload an image
                            </label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Image URL"
                                type="text"
                                id="image-url"
                                name="imageUrl"
                                value={formData.imageUrl}
                                onChange={handleChange}
                            />
                            {formData.imageUrl && (
                                <img
                                    className="w-auto rounded-lg border-gray-200 text-sm mt-2"
                                    src={formData.imageUrl}
                                    alt="Event Preview"
                                />
                            )}
                        </div>
                        <div
                            id="right-input-container"
                            className="grid grid-rows-3"
                        >
                            {/* ---------- StartDate ---------- */}
                            <div id="startdate">
                                <label className="sr-only" htmlFor="startDate">
                                    Start date
                                </label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Start date"
                                    type="date"
                                    id="startDate"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* ---------- EndDate ---------- */}
                            <div id="enddate">
                                <label htmlFor="endDate" className="sr-only">
                                    End date
                                </label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="End date"
                                    type="date"
                                    id="endDate"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* ---------- Recurrence ---------- */}
                            <div
                                id="recurrence-container"
                                className="flex flex-cols-3 gap-4 justify-between items-center"
                            >
                                <div className="col-span-2">
                                    <label
                                        className="sr-only"
                                        htmlFor="recurrence-pattern"
                                    >
                                        Recurrence
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Select recurrence"
                                        type="text"
                                        id="recurrence-pattern"
                                        name="recurrence_pattern"
                                        value={formData.recurrence_pattern}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div id="recurrence-toggle">
                                    <label
                                        htmlFor="AcceptConditions"
                                        className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-[#FF8225]"
                                    >
                                        <input
                                            type="checkbox"
                                            id="recurring"
                                            name="recurring"
                                            value={formData.recurring}
                                            onChange={handleChange}
                                            className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
                                        />
                                        <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-[#FF8225]">
                                            <svg
                                                data-unchecked-icon
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-4"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <svg
                                                data-checked-icon
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="hidden size-4"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div
                            id="description-container"
                            className="grid grid-col-2 col-span-2 gap-4 align-center"
                        >
                            {/* ---------- Description ---------- */}
                            <div id="description">
                                <label
                                    htmlFor="description"
                                    className="sr-only"
                                >
                                    {' '}
                                    Event description{' '}
                                </label>
                                <textarea
                                    id="description"
                                    className="mt-2 w-full rounded-lg resize-y border-gray-200 align-top shadow-sm sm:text-sm"
                                    rows="8"
                                    placeholder="What is this event about...?"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            {/* ---------- Buttons ---------- */}
                            <button
                                type="submit"
                                className="block w-full rounded-lg bg-gray-50 px-5 py-3 text-base font-medium text-[#697565] hover:bg-[#FF8225] hover:text-slate-100 active:bg-[#FF8225]"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EventForm;
