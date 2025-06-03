export default function Navbar (){
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
            <h1 className="text-2xl font-bold">
                <span className="px-2 text-black shadow-2xs">Event</span>
                <span className="text-purple-400">Hive</span>
            </h1>
            <div className="space-x-4">
                <button  className="px-4 py-2 text-sm font-medium bg-white text-black">Log In</button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded hover:bg-purple">Sign Up</button>
            </div>
        </nav>
    )
}