import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faArrowTrendUp  } from '@fortawesome/free-solid-svg-icons'
import FotoTexto from '../fotoTexto'

export default function DatosSemanales({arr}){
  return(
    <>
      {arr.map(({text, icon, num, uprising, colorBg, textColor, iconBgColor}, i) => {
        return(
          <div key={i} className={`flex flex-col ${colorBg} w-1/4 p-3 gap-5 rounded-lg justify-between `}>
            <div className='flex justify-between items-center'>
              <h5>{text}</h5>
              <FontAwesomeIcon icon={icon} className={`${iconBgColor} rounded-lg p-2 ${textColor}`}/>
            </div>
           <div>
            <h1 className={`${textColor} text-4xl font-bold`}>{num}</h1>
            </div>
            <div className='flex items-center gap-1'>
              <FotoTexto icono={faArrowTrendUp} color="text-green-500" texto={uprising}/>
            </div>
          </div>
          )
      })}
    </>
  )
}