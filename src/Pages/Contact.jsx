import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function Contact(){
  return (
    <div>
      <h2 className="text-4xl">Contact Me</h2>
      <div className="text-2xl flex items-center flex-col flex-wrap ">
        <a target="_blank" href="https://wa.me/+212635531475" className="color flex gap-1 align-middle flex-wrap text-green-600">WhatsApp <IoLogoWhatsapp /> </a>
        <a target="_blank" href="https://www.linkedin.com/in/mohamed-elkhouli/" className="color flex gap-1 align-middle flex-wrap text-blue-600">linkedin <FaLinkedin /> </a>
      </div>
    </div>
  );
}


