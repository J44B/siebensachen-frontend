function Autocomplete() {
    return (
        <div>
            <label
                htmlFor="autocomplete-items"
                className="block text-sm font-medium text-gray-900"
            >
                {' '}
                Type or select...{' '}
            </label>
            <div
                id="select-button-group"
                className="flex flex-row items-center mt-4"
            >
                <div className="relative">
                    <input
                        type="text"
                        list="globalItems"
                        id="items"
                        className="p-4 w-full rounded-lg border-[#173B45] pe-10 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0"
                        placeholder="Please select"
                    />

                    <span className="absolute inset-y-0 end-0 flex w-8 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                            />
                        </svg>
                    </span>
                </div>

                <div>
                    <button
                        className="rounded border border-current px-8 py-3 text-[#697565] hover:bg-[#FF8225] hover:text-slate-100 active:bg-[#FF8225]"
                        type="submit"
                        // onClick={addItem}
                    >
                        <span className="text-sm font-medium"> Add </span>
                    </button>
                </div>
            </div>
            {/* replace datalist with items from database */}
            <datalist name="items" id="globalItems">
                <option value="JM">John Mayer</option>
                <option value="SRV">Stevie Ray Vaughn</option>
                <option value="JH">Jimi Hendrix</option>
                <option value="BBK">B.B King</option>
                <option value="AK">Albert King</option>
                <option value="BG">Buddy Guy</option>
                <option value="EC">Eric Clapton</option>
            </datalist>
        </div>
    );
}

export default Autocomplete;
