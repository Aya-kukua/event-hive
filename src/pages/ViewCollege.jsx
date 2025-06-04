import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import collegeImage from "../assets/images/college.png"

export default function ViewCollege(){
 return (
    <>
    <Navbar/>
    <section className="min-h-screen">
        <div>
            <img src={collegeImage} alt="college image" />
        </div>
        <h1>
            Welcome to the view college Page
        </h1>
    </section>
    <Footer/>
    
    
    </>
 );


}