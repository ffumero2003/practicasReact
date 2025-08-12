import {  faPhone, faChartColumn, faIdCard, faChartLine, faNoteSticky, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Descripcion from './descripcion'
import Navigation from './navigation'
import Estado from './estado'


function LeftPannel(){
  const navigation = [
    {icon: faChartColumn, text: "Dashboard"},
    {icon: faIdCard, text: "Contactos", path: "/gestion"},
    {icon: faChartLine, text: "Actividades"},
    {icon: faNoteSticky, text: "Notas"},
    {icon: faEnvelope, text: "Emails"},
    {icon: faPhone, text: "Llamadas"},
  ]

  const estados = [
    {texto: "Llamadas activas", num: 0, color: "bg-green-200", colorTexto: "text-green-400"},
    {texto: "Notas pendientes", num: 3, color: "bg-yellow-200", colorTexto: "text-yellow-400"},
    {texto: "Emails sin leer", num: 7, color: "bg-blue-200", colorTexto: "text-blue-400"},
  ]

  return(
    <div className='flex flex-col gap-6 items-center h-full'>
      <Descripcion />

      <div className='w-full flex flex-col justify-center items-start p-3 gap-1'>
        <Navigation arr={navigation} />
      </div>

      <div className='w-full flex flex-col justify-center items-start p-3 gap-1'>
        <Estado arr={estados} />
      </div>
    </div>
  )
}

export default LeftPannel;