import { SiCoursera } from "react-icons/si";
import { SiUdemy } from "react-icons/si";
import { CarouselTransition } from "../carousel/Carousel";
import { IoShareSocial } from "react-icons/io5";
function MySkills() {
    return ( <section>
        <div className="shadow-2xl p-6 rounded-lg ">
            <h2 className="text-4xl text-blue-800 text-center mb-4">My Certificat Cours</h2>
            <CarouselTransition/>
            <div className="p-5">
                <h3 className="text-4xl text-blue-800 flex flex-wrap m-5 p-2"><IoShareSocial /> Links</h3>
                <div className="flex flex-row gap-5 justify-evenly">
                    <a href="https://www.coursera.org/user/d275b85eb86ce5f20e43b02aff6db98b" className="flex flex-wrap text-2xl text-blue-700" target="_blank" rel="noopener noreferrer"><SiCoursera /> Coursera</a>
                    <a href="https://www.udemy.com/user/mohamed-elkhouli-4/" className="flex flex-wrap text-2xl text-purple-500" target="_blank" rel="noopener noreferrer"><SiUdemy /> Coursera</a>

                </div>
               </div>
        </div>
    </section> );
}

export default MySkills;