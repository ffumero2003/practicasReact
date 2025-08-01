import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"

function AnchorsContactInfo(){
  return(
    <div className="w-1/2 flex justify-between p-2 bg-white">
        <ul className="ml-2 flex flex-col gap-2">
          <li className="border-l-2 border-transparent hover:border-black hover:ml-1 hover:pl-1 transition-all duration-500">
            <Link to="/" className="text-black">HOME</Link>
          </li>
          <li className="border-l-2 border-transparent hover:border-black hover:ml-1 hover:pl-1 transition-all duration-500">
            <Link to="/about" className="text-black">ABOUT</Link>
          </li>
          <li className="border-l-2 border-transparent hover:border-black hover:ml-1 hover:pl-1 transition-all duration-500">
            <Link to="/blog" className="text-black">BLOG</Link>
          </li>
          <li className="border-l-2 border-transparent hover:border-black hover:ml-1 hover:pl-1 transition-all duration-500">
            <Link to="/contact" className="text-black">CONTACT</Link>
          </li>
        </ul>
        <div className="flex flex-col items-end justify-center gap-1 mr-3">
          <h2 className=" text-5xl">Contact Info</h2>
          <div className="flex gap-2">
            <div className="flex justify-center items-center gap-1">
              <FontAwesomeIcon icon={faEnvelope}/>
              <p>support@convertible.com </p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <FontAwesomeIcon icon={faPhone}/>
              <p>1234 - 5678 - 9012</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AnchorsContactInfo;