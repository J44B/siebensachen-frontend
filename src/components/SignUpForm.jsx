import { useNavigate, Link } from 'react-router';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

function SignUpForm() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        user_name: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    // handleChange

    function handleChange(e) {
        const { name, value } = e.target;

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
        /* ------------------ Begin section with picture ------------------  */
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt="menschen, die einen van packen"
                        src="../src/assets/images/sign-up-image-smaller.png"
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />

                    <div className="hidden lg:relative lg:block lg:p-12">
                        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                            Willkommen bei siebensachen
                        </h2>

                        <p className="mt-4 leading-relaxed text-white/90">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Eligendi nam dolorum aliquam, quibusdam
                            aperiam voluptatum.
                        </p>
                    </div>
                </section>

                {/* The semantic HTML is not well designed. It needs further inspection, because the following <div> has redundant text and is read by screenreaders. */}

                <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block lg:hidden">
                            <h1 className="mt-12 text-xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                Willkommen bei siebensachen
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Eligendi nam dolorum aliquam,
                                quibusdam aperiam voluptatum.
                            </p>
                        </div>
                        {/* ------------------ End section with picture ------------------  */}

                        {/* ------------------ Begin form ------------------  */}
                        <form
                            className="mt-8 grid grid-cols-6 gap-6"
                            onSubmit={handleSignUp}
                        >
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-base font-medium text-gray-700">
                                    Vorname
                                </label>

                                <input
                                    type="text"
                                    id="Vorname"
                                    name="vorname"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Vorname"
                                    className="mt-1 p-2 w-full rounded-md border-2 border-spacing-2 border-[#173B45] bg-white text-base italic text-gray-700 shadow-lg focus:outline-none focus:border-[#173B45] focus:border-4"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-base font-medium text-gray-700">
                                    Nachname
                                </label>

                                <input
                                    type="text"
                                    id="Nachname"
                                    name="nachname"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Nachname"
                                    className="mt-1 p-2 w-full rounded-md border-2  border-[#173B45] bg-white text-base italic text-gray-700 shadow-lg focus:outline-none focus:border-[#173B45] focus:border-4"
                                />
                            </div>

                            <div className="col-span-6">
                                <label className="block text-base font-medium text-gray-700">
                                    Benutzername
                                </label>

                                <input
                                    type="text"
                                    id="Benutzername"
                                    name="benutzername"
                                    value={formData.userName}
                                    onChange={handleChange}
                                    placeholder="Benutzername"
                                    required
                                    className="mt-1 p-2 w-full rounded-md border-2  border-[#173B45] bg-white text-base italic text-gray-700 shadow-lg focus:outline-none focus:border-[#173B45] focus:border-4"
                                />
                            </div>

                            <div className="col-span-6">
                                <label className="block text-base font-medium text-gray-700">
                                    {' '}
                                    E-Mail-Adresse{' '}
                                </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="E-Mail-Adresse"
                                    required
                                    className="mt-1 p-2 w-full rounded-md border-2  border-[#173B45] bg-white text-base italic text-gray-700 shadow-lg focus:outline-none focus:border-[#173B45] focus:border-4"
                                />
                            </div>

                            <div className="col-span-6">
                                <label className="block text-base font-medium text-gray-700">
                                    {' '}
                                    Passwort{' '}
                                </label>

                                {/* Add function to show and hide password */}

                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Passwort"
                                    required
                                    className="mt-1 p-2 w-full rounded-md border-2  border-[#173B45] bg-white text-base italic text-gray-700 shadow-lg focus:outline-none focus:border-[#173B45] focus:border-4"
                                />
                            </div>

                            {/* ----------------------- Begin accept newsletter ----------------------- */}

                            {/* <div className="col-span-6">
                                <label
                                    htmlFor="MarketingAccept"
                                    className="flex gap-4"
                                >
                                    <input
                                        type="checkbox"
                                        id="MarketingAccept"
                                        name="marketing_accept"
                                        className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                                    />

                                    <span className="text-sm text-gray-700">
                                        I want to receive emails about events,
                                        product updates and company
                                        announcements.
                                    </span>
                                </label>
                            </div> */}

                            {/* ----------------------- End accept newsletter ----------------------- */}

                            {/* ----------------------- Begin accept terms & conditions ----------------------- */}

                            {/* <div className="col-span-6">
                                <p className="text-sm text-gray-500">
                                    By creating an account, you agree to our
                                    <a
                                        href="#"
                                        className="text-gray-700 underline"
                                    >
                                        {' '}
                                        terms and conditions{' '}
                                    </a>
                                    and
                                    <a
                                        href="#"
                                        className="text-gray-700 underline"
                                    >
                                        privacy policy
                                    </a>
                                    .
                                </p>
                            </div> */}

                            {/* ----------------------- End accept terms & conditions ----------------------- */}

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    type="submit"
                                    className="inline-block shrink-0 rounded-md border border-[#E78F81] bg-[#E78F81] px-12 py-3 text-sm font-semibold text-[#173B45] transition hover:bg-transparent focus:outline-none focus:border-[#173B45] focus:border-4"
                                >
                                    Account erstellen
                                </button>
                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Du hast schon einen Account?
                                </p>
                                <Link to="/" className="underline">
                                    Anmelden
                                </Link>
                                .
                            </div>
                            {/* ------------------ End form ------------------  */}
                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
}

export default SignUpForm;
