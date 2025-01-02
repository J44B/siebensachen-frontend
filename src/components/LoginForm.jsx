import { useNavigate, Link } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../contexts/AuthProvider';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setIsLoggedIn, checkUser } = useAuth();

    const navigate = useNavigate();

    // handleLogin

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/users/login`,
                {
                    email,
                    password,
                },
                { headers: { 'Content-Type': 'application/json' } },
                {
                    withCredentials: true,
                },
            );
            if (response.status === 200) {
                setIsLoggedIn(true);
                const user = await checkUser();

                if (user) {
                    toast.success(`Welcome back, ${user.userName}.`);
                } else {
                    toast.error(
                        'Could not retrieve user data. Please try again.',
                    );
                }
                navigate('/');
            }
        } catch (error) {
            setError(error.response.data.error || 'Login failed');
            toast.error(error.response.data.error);
            console.error(error);
        }
    }

    // Login form

    return (
        <div className="mx-auto max-w-screen-xl sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h2 className="text-center text-2xl font-bold text-[#3C3D37] sm:text-3xl">
                    Welcome to <b>sieben</b>
                    <i>sachen!</i>
                </h2>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Your moments. Together. Prepared.
                </p>
                {error && (
                    <p className="text-red-500 mb-4 font-semibold">{error}</p>
                )}
            </div>

            <form
                onSubmit={handleLogin}
                className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8 bg-[#697565]"
            >
                <p className="text-center text-lg font-semibold  text-slate-100">
                    Welcome back. Please sign in.
                </p>
                {/* ----------- email ------------ */}
                <div>
                    <label htmlFor="email" className="sr-only">
                        Email
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                {/* ----------- password ------------ */}
                <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            required
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
                <button
                    type="submit"
                    className="block w-full rounded-lg bg-gray-50 px-5 py-3 text-base font-medium text-[#697565] hover:bg-[#FF8225] hover:text-slate-100 active:bg-[#FF8225]"
                >
                    Login
                </button>

                <p className="text-center text-sm text-gray-200">
                    Already have an account? <br />
                    <Link to="/signup" className="underline" href="#">
                        Register here
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default LoginForm;
