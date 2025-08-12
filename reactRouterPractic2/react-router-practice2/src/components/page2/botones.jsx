import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch  } from '@fortawesome/free-solid-svg-icons'


function Botones(){
  return(
    <div className="py-3 flex justify-between mt-5">
        <div className="flex gap-2  items-center w-full">
           <FontAwesomeIcon icon={faSearch}/>
           <input type="text" className="p-2 w-1/2 focus:outline-none" placeholder="Buscar contactos por nombre, email o empresa...." />
        </div>
        <div className="flex gap-2 ">
          <button className="text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all duration-500">Todos</button>
          <button className="text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all duration-500">Clientes</button>
          <button className="text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all duration-500">Prospectos</button>
          <button className="text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all duration-500">Activos</button>
        </div>
      </div>
  )
}
export default Botones