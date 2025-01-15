import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <div className="grid h-screen place-content-center">
            <div className="text-center">
                <h1 className="text-9xl font-black text-gray-200">404</h1>

                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Wow!
                </p>

                <p className="mt-4 text-gray-500">
                    You found a page that does not exist.
                </p>

                <button
                    onClick={() => navigate('/')}
                    className="mt-6 inline-block rounded bg-gray-200 px-5 py-3 text-sm font-medium text-[#697565] hover:bg-[#FF8225] hover:text-slate-100 active:bg-[#FF8225] focus:outline-none focus:ring"
                >
                    Go Back Home
                </button>
            </div>
        </div>
    );
}

export default NotFoundPage;
