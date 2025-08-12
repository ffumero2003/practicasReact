import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FotoTexto({icono, color, texto, size}){
  return(
    <div className='flex p-3 items-center gap-1'>
      <FontAwesomeIcon icon={icono}  className={`${color} ${size}`}/>
      <p className={`${color} ${size}`}>{texto}</p>
    </div>
  )
}