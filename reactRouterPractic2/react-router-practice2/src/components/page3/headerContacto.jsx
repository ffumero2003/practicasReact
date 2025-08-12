import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowLeft, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import TituloSubtitulo from '../tituloSubtitulo';

function HeaderContacto(){
  return(
    <div className="flex justify-between">
        <div className='flex gap-10'>
          <button className="flex justify-center items-center gap-1 hover:shadow-lg transition-shadow duration-500 rounded-lg p-2">
            <FontAwesomeIcon icon={faArrowLeft} />
            Volver
          </button>
          <div className='flex gap-1 flex-col'>
            <TituloSubtitulo titulo="Detalle del Contacto" subtitulo="Informacion completa y actvidades relacionadas" />
          </div>
        </div>

        <button className='px-3 py-2 bg-blue-500 text-white flex gap-1 h-fit mt-5 justify-center items-center rounded-lg hover:shadow-lg transition-shadow duration-500'>
          <FontAwesomeIcon icon={faPenToSquare} />
          Editar
        </button>
      </div>
  )
}

export default HeaderContacto;