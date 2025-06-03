import { Linkedin,Instagram,Facebook } from "lucide-react";



export default function Footer() {
    return (
        <footer className="bg-navy-blue text-white  px-6 py-10 mt-10">
            <h1 className="flex justify-center text-4xl font-bold mb-3 font-sans">
                <span className="px-2">Event</span>
                <span className="text-purple-400">Hive</span>
            </h1>
            <form  className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"><input type="email" placeholder="Enter your mail" name="email"  className="px-4 py-2 rounded w-full sm:w-auto text-gray-800 bg-white items-center"/>
            <button type="submit"  className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-indigo-600"> Subscribe</button>
             </form>
             <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-200">
                <span>Home</span>
                <span>About</span>
                <span>Services</span>
                <span>Get in Touch</span>
                <span>FAQs</span>
             </div>
             <hr/>
             <div className=" flex flex-row justify-between text-sm ">
                <div className="flex flex-row md:flex-row gap-2 text-sm">
                <button className="rounded hover:bg-purple-500">English</button>
                 <button className="rounded hover:bg-purple-500">French</button>
                  <button className="rounded hover:bg-purple-500">Hindi</button>
             </div>
             <div className="flex flex-row gap-2">
                <Linkedin/>
                <Instagram/>
                <Facebook/>
             </div>
             <p>Non Copyrighted © 2025 Upload by EventHive</p>
             </div>
        </footer>
    );

}
