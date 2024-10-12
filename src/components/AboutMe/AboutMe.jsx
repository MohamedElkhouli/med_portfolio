import { Link } from "react-router-dom";


function AboutMe() {
    return (
    <div className="flex items-center justify-between flex-wrap p-1">
            <div className="aboutMe ">
                <h2 className="text-2xl">Hello , My Name is <span className="text-amber-500">Mohamed </span>  <span className="text-amber-500">ElKhouli</span> </h2>
                <h3 className="text-4xl font-bold text-blue-600 fade-in-up"> I'm full stack developer</h3>
                
                <Link to='/contact' className="link px-4 mt-3 py-2 bg-yellow-400 font-semibold rounded-full hover:bg-white hover:text-yellow-500 transition duration-300 mt-8">Contact Me</Link>
            </div>
            <div className=""> 
                    <img src="src\assets\logos\mohamed.png" className="h-2/3 rounded-full" alt="logo" />
            </div>
     </div>);
}

export default AboutMe;