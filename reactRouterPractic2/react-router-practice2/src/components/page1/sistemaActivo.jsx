import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck  } from '@fortawesome/free-solid-svg-icons'


export default function SistemaActivo(){
  return(
    <>
      <div className='flex gap-2 justify-center items-center bg-green-100 p-2 rounded-t-lg'>
        <FontAwesomeIcon icon={faCheck} />
        <p>Sistema activo</p>
      </div>
      <p className='p-2'>08 de agosto, 2025</p>
    </>
  )
}