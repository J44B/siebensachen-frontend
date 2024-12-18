function SignUpForm() {
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
                            action="#"
                            className="mt-8 grid grid-cols-6 gap-6"
                        >
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Vorname"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    Vorname
                                </label>

                                <input
                                    type="text"
                                    id="Vorname"
                                    name="vorname"
                                    placeholder="Vorname"
                                    className="mt-1 p-2 w-full rounded-md border-2 border-spacing-2 border-[#173B45] bg-white text-base italic text-gray-700 shadow-lg focus:outline-none focus:border-[#173B45] focus:border-4"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Nachname"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    Nachname
                                </label>

                                <input
                                    type="text"
                                    id="Nachname"
                                    name="nachname"
                                    placeholder="Nachname"
                                    className="mt-1 p-2 w-full rounded-md border-2  border-[#173B45] bg-white text-base italic text-gray-700 shadow-lg focus:outline-none focus:border-[#173B45] focus:border-4"
                                />
                            </div>

                            <div className="col-span-6">
                                <label
                                    htmlFor="Email"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    {' '}
                                    E-Mail-Adresse{' '}
                                </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    placeholder="E-Mail-Adresse"
                                    className="mt-1 p-2 w-full rounded-md border-2  border-[#173B45] bg-white text-base italic text-gray-700 shadow-lg focus:outline-none focus:border-[#173B45] focus:border-4"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Password"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    {' '}
                                    Passwort{' '}
                                </label>

                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    placeholder="Passwort"
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
                                    Already have an account?
                                    <a
                                        href="#"
                                        className="text-gray-700 underline"
                                    >
                                        Log in
                                    </a>
                                    .
                                </p>
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
