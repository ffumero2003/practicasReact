import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function InfoUsuario({icono, texto, nombre}){
  return(
    <div className='flex justify-start items-center gap-1 p-2'>
      <FontAwesomeIcon icon={icono} className='text-2xl text-gray-500' />
      <div className='flex flex-col justify-start items-start'>
        <h4 className='text-sm text-gray-500'>{texto}</h4>
        <h3>{nombre}</h3>
      </div>
    </div>
  )
}

export default InfoUsuario;