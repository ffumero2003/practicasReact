import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhone   } from '@fortawesome/free-solid-svg-icons'

export default function Llamadas({arr}){
  return(
    <div className="flex flex-col divide-y">
      {arr.map(({ phoneNum, going, duration, date }, i) => (
        <div key={i} className="flex justify-between items-center py-3">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                <FontAwesomeIcon icon={faPhone} className="text-white text-lg" />
              </div>
              <div className="flex flex-col">
                <h1 className="font-medium"> Llamada {going}: {phoneNum}</h1>
                  <p className="text-sm text-gray-500">{duration}</p>
                  <p className="text-sm text-gray-500">{date}</p>
               </div>
            </div>
             <div className="text-right">
                <h4 className="text-green-600 font-medium">Finalizado</h4>
              </div>
        </div>
      ))}
    </div>
  )
}