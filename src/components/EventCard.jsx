import camp from '../assets/images/festival-camp.jpg';

function EventCard({ event }) {
    if (!event) {
        return <p>Event not found.</p>;
    }

    return (
        <div className="flex flex-col sm:flex-row overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <div className="sm:block sm:basis-56">
                <img
                    alt={event.title}
                    src={event.imageUrl ? event.imageUrl : camp}
                    className="h-56 w-full object-cover"
                />
            </div>
            <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <div>
                        <h3 className="font-bold uppercase text-gray-900">
                            {event.title || 'No title available'}
                        </h3>
                    </div>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        {event.description || 'No description available'}
                    </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                    <button
                        href="#"
                        className="block bg-gray-50 px-5 py-3 text-center text-xs font-bold uppercase text-[#697565] hover:bg-[#FF8225] hover:text-slate-100 active:bg-[#FF8225]"
                    >
                        Open event
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EventCard;
