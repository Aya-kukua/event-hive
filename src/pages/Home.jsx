import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search } from "lucide-react";
import EventCard from "../components/EventCard";

export default function Home() {
    return (
        <>
            <Navbar />
            <section className=" bg-[url(./assets/images/hero-bg.png)] h-[596px] w-[95%] mx-auto bg-cover relative ">
                <h1 className="text-white text-big-heading w-[30%] mx-auto text-center pt-32">MADE FOR THOSE WHO DO</h1>

                <form className="bg-navy-blue w-[90%] mx-auto rounded-xl flex flex-row justify-between absolute -bottom-12 left-[5%]">
                    <div className="flex flex-col p-6 w-[30%]">
                        <label className="text-white" htmlFor="type">Looking for</label>
                        <select name="type" id="type" className="bg-white rounded-md p-2">
                            <option selected disable>Choose event type</option>
                            <option value="drama">Drama</option>
                            <option value="tech">Tech</option>
                            <option value="poetry">Poetry</option>
                        </select>
                    </div>
                    <div className="flex flex-col p-6 w-[30%]">
                        <label className="text-white" htmlFor="type">Location</label>
                        <select name="type" id="type" className="bg-white p-2 rounded-md">

                            <option selected disabled>Choose location</option>

                            <option value="drama">Accra</option>
                            <option value="tech">Kumasi</option>
                            <option value="poetry">Takoradi</option>
                        </select>
                    </div>
                     <div className="flex flex-col w-[30%] p-6">
                        <label className="text-white" htmlFor="when">When</label>
                        <input type="datetime-local" name="when" id="when" className="bg-white p-2 rounded-md" />
                    </div>
                     <div className="bg-purple-400 text-white size-[60px] flex flex-row justify-center items-center rounded-md mt-8 mx-auto">
                        <Search />
                    </div>
                </form>
            </section>
            <section>
                <div>
                    <span>Upcoming</span>
                    <span>Event</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {[1,2,3,4,5,6].map(n => <EventCard key={n}/>)}
                </div>
            </section>
            <section className="h-[500px]"> </section>
            <Footer />

        </>
    );

}