import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Inputs({ icon, placeholder }) {
  return (
   
      <div className="flex border border-black items-center gap-2 w-full">
        <div className="border-r-1 border-gray-500 p-2 h-10 w-10 flex items-center justify-center">
          <FontAwesomeIcon
            icon={icon}
            className="w-10 h-10 p-2 border border-black rounded-full bg-white"
          />
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className="w-3/4 focus:outline-none"
        />
      </div>

  );
}

export default Inputs;
