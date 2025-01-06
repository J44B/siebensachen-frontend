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
    - cancel
        - closes form and navigates back to HomePage
    - create event
        - sends request to backend
        - closes form
        - navigates to SingleEvent page
- design
    - make image, date and recurrence fit nicely
*/

import camp from '../assets/images/festival-camp.jpg';

function CreateEventForm() {
    return (
        <div className="mx-auto max-w-screen-xl sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <form className="mb-0 mt-6 space-y-4 rounded-lg p-4 drop-shadow-2xl sm:p-6 lg:p-8 bg-[#697565]">
                    <p className="text-center text-lg font-semibold  text-slate-100">
                        Create a new event
                    </p>
                    <div>
                        <label className="sr-only" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Title"
                            type="text"
                            id="title"
                        />
                    </div>

                    <div className="grid grid-rows-3 grid-cols-2 gap-4 content-center">
                        <div className="row-span-3">
                            <label className="sr-only" htmlFor="image-url">
                                Upload an image
                            </label>
                            <img
                                className="w-full rounded-lg border-gray-200  p-3 text-sm"
                                src={camp}
                            />
                        </div>

                        <div>
                            <label className="sr-only" htmlFor="start-date">
                                Start date
                            </label>
                            <input
                                className="w-fit rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Start date"
                                type="date"
                                id="start-date"
                            />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="end-date">
                                End date
                            </label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="End date"
                                type="date"
                                id="end-date"
                            />
                        </div>
                        <div id="recurrence" className="grid grid-cols-3">
                            <div className="col-span-2">
                                <label
                                    className="sr-only"
                                    htmlFor="recurrence-pattern"
                                >
                                    Recurrence
                                </label>
                                <input
                                    className="row-span-1 w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Recurrence"
                                    type="text"
                                    id="recurrence-pattern"
                                />
                            </div>
                            <div>
                                <button className=""></button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                        <div>
                            <label
                                htmlFor="Option1"
                                className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                                tabIndex="0"
                            >
                                <input
                                    className="sr-only"
                                    id="Option1"
                                    type="radio"
                                    tabIndex="-1"
                                    name="option"
                                />

                                <span className="text-sm"> Option 1 </span>
                            </label>
                        </div>

                        <div>
                            <label
                                htmlFor="Option2"
                                className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                                tabIndex="0"
                            >
                                <input
                                    className="sr-only"
                                    id="Option2"
                                    type="radio"
                                    tabIndex="-1"
                                    name="option"
                                />

                                <span className="text-sm"> Option 2 </span>
                            </label>
                        </div>

                        <div>
                            <label
                                htmlFor="Option3"
                                className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                                tabIndex="0"
                            >
                                <input
                                    className="sr-only"
                                    id="Option3"
                                    type="radio"
                                    tabIndex="-1"
                                    name="option"
                                />

                                <span className="text-sm"> Option 3 </span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="sr-only" htmlFor="message">
                            Message
                        </label>

                        <textarea
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Message"
                            rows="8"
                            id="message"
                        ></textarea>
                    </div>

                    <div className="mt-4">
                        <button
                            type="submit"
                            className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                        >
                            Send Enquiry
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateEventForm;
