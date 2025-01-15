import { Link } from 'react-router';
import { convertDate, calculateDays } from '../../utils/utilityFunctions.js';
import camp from '../assets/images/festival-camp.jpg';

function DetailedEventCard({ event }) {
    if (!event) {
        return <p>Event not found.</p>;
    }

    return (
        <div className="flex flex-col sm:flex-row overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <div id="image" className="sm:block sm:basis-56">
                <img
                    alt={event.title}
                    src={event.imageUrl ? event.imageUrl : camp}
                    className="h-56 w-full object-cover"
                />
            </div>
            <div className="flex flex-1 flex-col justify-between max-w-prose">
                <div className="p-4">
                    {/* ---------- Title ---------- */}
                    <div>
                        <h3 className="font-bold uppercase text-gray-900">
                            {event.title || 'No title available'}
                        </h3>
                        <div id="dates" className="flex flex-row gap-4">
                            {/* ---------- StartDate ---------- */}
                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                {`Start: ${convertDate(event.startDate)}`}
                            </p>
                            {/* ---------- EndDate ---------- */}
                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                {`End: ${convertDate(event.endDate)}`}
                            </p>
                        </div>
                        {/* ---------- Number of days ---------- */}
                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                            {`Days: ${calculateDays(
                                event.endDate,
                                event.startDate,
                            )}`}
                        </p>
                        {/* ---------- Description ---------- */}
                        <p className="mt-2 line-clamp-5 text-sm/relaxed text-gray-700">
                            {event.description
                                ? event.description
                                : 'No description available'}
                        </p>
                    </div>
                </div>
                {/* ---------- Button ---------- */}
                <div
                    id="button-area"
                    className="flex flex-row-reverse items-end justify-between"
                >
                    <Link to={`/events/${event.id}/edit`}>
                        <button className="block bg-gray-50 px-5 py-3 text-center text-xs font-bold uppercase text-[#697565] hover:bg-[#FF8225] hover:text-slate-100 active:bg-[#FF8225]">
                            Edit event
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DetailedEventCard;

/* <button
onClick={() => onDelete(event.id)}
className="block bg-gray-50 px-5 py-3 text-center text-xs font-bold uppercase text-[#697565] hover:bg-[#df6666ef] hover:text-slate-100 active:bg-[#df6666ef]"
>
Delete event
</button> */
