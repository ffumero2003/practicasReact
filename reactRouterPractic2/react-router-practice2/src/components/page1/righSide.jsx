import {   faPerson, faFile, faEnvelope, faPhone, faArrowTrendUp, faClock, faBoltLightning, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import Header from '../page2/header'
import TituloSubtitulo from '../tituloSubtitulo';
import SistemaActivo from './sistemaActivo';
import DatosSemanales from './datosSemanales';
import DatosSemanalesDos from './datosSemanalesDos';
import FotoTexto from '../fotoTexto';
import Llamadas from './llamadas';
import NuevoItem from './nuevoItem';

function RightSide(){
  const stocks = [
    {text: "Total Contactos", icon: faPerson, num: 8,  uprising: "+5 esta semana", colorBg: "bg-blue-100", textColor: "text-blue-600", iconBgColor: "bg-blue-200"},
    {text: "Notas Creadas", icon: faFile, num: 9,  uprising: "+6 esta semana", colorBg: "bg-purple-100",textColor: "text-purple-600", iconBgColor: "bg-purple-200"},
    {text: "Email Registrados", icon: faEnvelope, num: 9,  uprising: "+9 esta semana", colorBg: "bg-green-100", textColor: "text-green-600", iconBgColor: "bg-green-200"},
    {text: "Llamadas Realizadas", icon: faPhone, num: 10,  uprising: "+8 esta semana", colorBg: "bg-yellow-100", textColor: "text-yellow-600", iconBgColor: "bg-yellow-200"},
  ]

  const medio = [
    {icono: faClock, text: "Duracion Media de Llamadas", num: "18 min", confirmation: "Total: 181 minutos", bgColor: "bg-blue-200", textColor: "text-blue-600"},
    {icono: faArrowTrendUp, text: "Contactos Activos", num: "2", confirmation: "3 clientes confirmados", bgColor: "bg-green-200", textColor: "text-green-600"},
    {icono: faFile, text: "Notas Importantes", num: "4", confirmation: "2 notas fijadas", bgColor: "bg-purple-200", textColor:"text-purple-600"}
  ]

  const phoneCalls = [
    {phoneNum: "+ 34 666 234 456", going: "saliente", duration: "31 min", date: "06 ago 01:12"},
    {phoneNum: "+ 34 678 234 567", going: "entrante", duration: "15 min", date: "06 ago 01:13"}

  ]

  const accionesRapidas = [
  { label: "Nuevo Contacto", icon: faUserPlus, bg: "bg-blue-500", hover: "hover:bg-blue-600", path: "/crearContacto" },
  { label: "Crear Nota", icon: faFile, bg: "bg-purple-500", hover: "hover:bg-purple-600", path: "/crearNota" },
  { label: "Registrar Email", icon: faEnvelope, bg: "bg-emerald-500", hover: "hover:bg-emerald-600", path: "/registrarEmail" },
  { label: "Nueva Llamada", icon: faPhone, bg: "bg-orange-500", hover: "hover:bg-orange-600", path: "/nuevaLlamada" },
];

  return(
    <div className='h-full w-full flex flex-col p-2 '>

      <div className='flex w-full justify-between'>
        <Header title="Dashboard"/>
      </div>

      <div className='flex justify-between items-start mt-12'> 
        <TituloSubtitulo titulo="Dashboard Principal" subtitulo="Resumen de actividad y metricas clave del CRM" />
        <div className='flex gap-5 mt-5'>
          <SistemaActivo />
        </div>
      </div>

      <div className='w-full flex gap-2 p-2 '>
        <DatosSemanales arr={stocks} />
      </div>

      <div className='w-full flex gap-2 p-2'>
        <DatosSemanalesDos arr={medio}/>
      </div>

      <div className='w-full flex '>
        <div className="w-4/6 ">
          {/* <div className='flex p-3  items-center gap-2'> */}
              <FotoTexto icono={faClock} color="text-black" texto="Actividades Recientes" size="text-2xl" />
          {/* </div> */}
          {/* <div className="flex flex-col divide-y"> */}
            <Llamadas arr={phoneCalls}/>
          </div>
        {/* </div> */}

        <div className='w-2/6'>
      {/* <div className='flex p-3 items-center gap-1'> */}
        <FotoTexto icono={faBoltLightning} color="text-black" texto="Acciones Rapidas" size="text-2xl" />
      {/* </div> */}

      
        <NuevoItem arr={accionesRapidas} />
      
    </div>
      </div>

    </div>
  )
}

export default RightSide