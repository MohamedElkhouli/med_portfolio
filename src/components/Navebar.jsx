import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import { FiMessageCircle } from "react-icons/fi";
import { TbArrowBadgeDownFilled } from "react-icons/tb";
export default function Navebar() {
    return <nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-white bg-opacity-90 sticky top-3 lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999] mb-8 rounded-xl shadow-xl mt-1">
    <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
      <Link to="#"
        className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
         <img
          alt=""
          src="src\assets\logos\mohamed.png"
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white hover:scale-150 transition duration-500"
        />
      </Link>
      <div className="hidden lg:block">
        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
            <Link to="/" className="flex items-center hover:text-yellow-500  hover:scale-150 transition duration-500 "><IoHomeOutline />Home</Link>
          </li>
          <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
            <Link to="/about" className="flex items-center hover:text-yellow-500  hover:scale-150 transition duration-500 "><GrContactInfo />About</Link>
          </li>
          <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
            <Link to="/contact" className="flex items-center hover:text-yellow-500  hover:scale-150 transition duration-500 "><FiMessageCircle />Contact</Link>
          </li>
          <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
            <Link to="/projects" className="flex items-center hover:text-yellow-500  hover:scale-150 transition duration-500 "><TbArrowBadgeDownFilled />Projects</Link>
          </li>
        </ul>
      </div>
      <button
        className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
        type="button">
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </span>
      </button>
    </div>
  </nav>
}
