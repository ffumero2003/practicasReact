import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Socials({icon}){
  return(
    <div className="group p-2 border border-black rounded-full hover:bg-black transition-all duration-500">
      <FontAwesomeIcon icon={icon} className="text-black text-2xl group-hover:text-white transition-all duration-500"/>
    </div>
  )
}

export default Socials;

