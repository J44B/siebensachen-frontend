import { useNavigate, Link } from 'react-router';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

function SignUpForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    // handleChange

    function handleChange(e) {
        const { name, value } = e.target;
        console.log(value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    // handleSignUp

    async function handleSignUp(e) {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/users/signup`,
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    userName: formData.userName,
                    email: formData.email,
                    password: formData.password,
                },
                { headers: { 'Content-Type': 'application/json' } },
                {
                    withCredentials: true,
                },
            );
            if (response.status === 201) {
                navigate('/login');
                toast.success('Registrierung erfolgreich.');
            }
        } catch (error) {
            toast.error(
                error.response.data.error || 'Registrierung fehlgeschlagen.',
            );
            console.error(error);
        }
    }

    return (
        <div className="mx-auto max-w-screen-xl sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-[#3C3D37] sm:text-3xl">
                    Welcome to <b>sieben</b>
                    <i>sachen!</i>
                </h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Your life. Your moments. Together.
                </p>

                <form
                    onSubmit={handleSignUp}
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8 bg-[#697565]"
                >
                    <p className="text-center text-lg font-semibold  text-slate-100">
                        Create your account
                    </p>
                    {/* ----------- firstName ------------ */}
                    <div>
                        <label htmlFor="firstName" className="sr-only">
                            First name
                        </label>

                        <div className="relative">
                            <input
                                type="text"
                                name="firstName"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter first name"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    {/* ----------- lastName ------------ */}
                    <div>
                        <label htmlFor="lastName" className="sr-only">
                            Last name
                        </label>

                        <div className="relative">
                            <input
                                type="text"
                                name="lastName"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter last name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    {/* ----------- userName ------------ */}
                    <div>
                        <label htmlFor="userName" className="sr-only">
                            User name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                name="userName"
                                required
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter user name"
                                value={formData.userName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
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
                                value={formData.email}
                                onChange={handleChange}
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
                                value={formData.password}
                                onChange={handleChange}
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
                        className="block w-full rounded-lg bg-gray-50 px-5 py-3 text-base font-medium text-[#697565]"
                    >
                        Sign up
                    </button>

                    <p className="text-center text-sm text-gray-200">
                        Already have an account? <br />
                        <Link to="/signin" className="underline" href="#">
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;
