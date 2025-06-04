import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

export default function CreateEvent() {
    return (
        <>
            <Navbar />

            <section className="flex flex-col items-center justify-center w-[80%] p-4 gap-6 mx-auto">
               
                    <h1 className="text-center font-bold text-black text-4xl"> Create Event</h1>
                    
                    <div className="mb-4 w-80">
                        <label htmlFor="event name" className="block mb-2 text-sm font-medium text-gray-700">
                            Event Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter the title of your event"
                            className="w-full p-3 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4 w-80">
                        <label htmlFor="venue" className="block mb-2 text-sm font-medium text-gray-700">
                            Event Venue
                        </label>
                        <input
                            type="email"
                            placeholder="Enter the Venue"
                            className="w-full p-3 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">

                        <div>
                            <label htmlFor="start-time" className="block mb-2 text-sm font-medium text-gray-700">
                                Start Time
                            </label>
                            <input
                                type="time"
                                name="start-time"
                                id="start-time"
                                className="w-full p-3 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>


                        <div>
                            <label htmlFor="end-time" className="block mb-2 text-sm font-medium text-gray-700">
                                End Time
                            </label>
                            <input
                                type="time"
                                name="end-time"
                                id="end-time"
                                className="w-full p-3 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="start-date" className="block mb-2 text-sm font-medium text-gray-700">
                                Start Date
                            </label>
                            <input
                                type="date"
                                name="start-date"
                                id="start-date"
                                className="w-full p-3 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="end-date" className="block mb-2 text-sm font-medium text-gray-700">
                                End Date
                            </label>
                            <input
                                type="date"
                                name="end-date"
                                id="end-date"
                                className="w-full p-3 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                
            </section>

        </>


    );
}
