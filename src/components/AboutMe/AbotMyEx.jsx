import { Link } from "react-router-dom";
import './style.css'
function AboutMyEx() {
    return (<> 
    <div className="aboutMe">
    <Link to='/about' className="aboutMe hover:cursor-help">
    <div className="grid grid-rows-3 grid-flow-col gap-4 px-4 py-4 leading-10 mt-28 shadow-2xl rounded-3xl">
        <div className="p-4 w-full rounded-xl row-span-3"> <img src="src\assets\logos\picabout.jpg" alt="" /> </div>
        <div className="p-4 w-full rounded-xl col-span-2"><h2 className="text-5xl text-blue-600 w-10/12 font-serif place-self-auto" >About Me</h2></div>
        <div className="p-4 w-full rounded-xl row-span-2 col-span-2 text-2xl p-2 font-serif">My name is  <span className="text-yellow-500">Mohamed
             Elkhouli</span> and I am a full-stack developer passionate about programming and creating innovative solutions. With solid expertise in front-end and back-end development, I am able to design and carry out complete projects, using a variety of technologies and programming languages. My creativity and attention to detail allow me to approach each technical challenge with enthusiasm and rigor.
         As a committed professional, I seek to contribute to ambitious projects and collaborate with dynamic teams to <span className="text-yellow-500">create high-performance </span> 
          and <span className="text-yellow-500"> user-friendly applications.</span> </div>
    </div>
    </Link>
    </div>

    </> );
}

export default AboutMyEx;