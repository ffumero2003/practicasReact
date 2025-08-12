import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function AnchorsContactInfo(){
  const links = [
    {to: "/", label: "HOME"},
    {to: "/about", label: "ABOUT"},
    {to: "/blog", label: "BLOG"},
    {to: "/contact", label: "CONTACT"},
  ];

  return (
    <div className="w-1/2 flex justify-between p-2 bg-white">
      <ul className="ml-2 flex flex-col gap-2">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-black border-l-2 border-black pl-1 ml-1"
                  : "text-black border-l-2 border-transparent hover:border-black hover:ml-1 hover:pl-1 transition-all duration-500"
              }
              
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-end justify-center gap-1 mr-3">
        <h2 className="text-5xl">Contact Info</h2>
        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faEnvelope}/>
            <p>support@convertible.com</p>
          </div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faPhone}/>
            <p>1234 - 5678 - 9012</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnchorsContactInfo;
