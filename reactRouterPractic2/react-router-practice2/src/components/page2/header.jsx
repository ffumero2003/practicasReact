import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBell, faSearch } from '@fortawesome/free-solid-svg-icons'


function Header({title}){
  return(
    <>
      <h1 className='font-bold text-lg'>{title}</h1>
        <div className='flex items-center justify-around   w-2/6'>
          <div className='flex gap-2 justify-center items-center'>                
             <FontAwesomeIcon icon={faSearch} className='text-gray-500'/>
             <input type="text " placeholder='Buscar Contacto...' className='focus:outline-none'/>
          </div>
       <div>
       <FontAwesomeIcon icon={faBell} />
        </div>
      </div>
    </>
  )
}

export default Header;