import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Descripcion(){
  return(
 
      <div className="flex  gap-2 items-center p-3">
        <div >
         <FontAwesomeIcon icon={faPhone}  className='p-3 bg-blue-500 rounded-md text-white'/> 
          </div>
          <div className='flex flex-col'>
            <h1 className='font-bold'>CRM Pro</h1>
            <p>Sistema de gestion</p>
          </div>
          </div>
    
  )
}