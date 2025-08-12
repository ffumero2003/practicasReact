import HeaderContacto from "../components/page3/headerContacto"
import Usuario from "../components/page3/usuario"
import InfoUsuario from "../components/page3/infoUsuario"
import Etiquetas from "../components/page3/etiquetas"
import NotasRapidas from "../components/page3/notasRapidas"
import HistorialActividades from "../components/page3/historialActividades"
import LeftPannel from "../components/left pannel/leftPannel"
import {  faBuilding, faEnvelope, faPhone, faLocationDot, faCalendar, faFile  } from '@fortawesome/free-solid-svg-icons'
import { personas } from "../personas"
import { useParams, useNavigate } from "react-router-dom"


function DetalleContactoPage(){

  const { id } = useParams();
  const navigate = useNavigate();

  const persona = personas.find(p => String(p.id) === String(id))

  if (!persona) {
    return (
      <div className="p-6 flex flex-col justify-center items-center gap-2 h-screen">
        <p>Contacto no encontrado.</p>
        <button onClick={() => navigate(-1)} className="mt-4 rounded px-4 py-2 border">Volver</button>
      </div>
    );
  }

  

  const etiquetas = persona.detalles?.length ? persona.detalles : ["Sin etiquetas"]

   const info = [
    {
      icono: faEnvelope,
      title: "Email saliente",
      subTitle: "Documentacion tecnica solicitada",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla urna velit, sed sodales mauris consectetur et. Suspendisse maximus, eros nec sollicitudin luctus, justo elit maximus quam, a elementum arcu erat ornare ipsum. Duis venenatis est ndum.",
      color: "text-green-600",
      bg: "bg-green-200"
    },
    {
      icono: faFile,
      title: "Nota: Follow-up llamada Carlos Ruiz",
      subTitle: "Prioridad Alta",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla urna velit, sed sodales mauris consectetur et. Suspendisse maximus, eros nec sollicitudin luctus, justo elit maximus quam, a elementum arcu erat ornare ipsum. Duis venenatis est non quam venenatis, et pharetra massa aliquet. Mauris urna ante, eleifend pretium volutpat sit amet, egestas vitae quam. Nullam ipsum metus, varius a ultricies at, scelerisque sed neque. Nullam felis ante, consequat quis facilisis id, finibus vitae urna. Nunc ullamcorper lectus ac lorem consequat, sed ullamcorper augue condimentum. Mauris maximus est nulla, sed posuere justo efficitur bibendum.",
      color: "text-purple-600",
      bg: "bg-purple-200"
    },
  ]

  


  return(
    <div className="h-screen flex gap-2  p-3">

      <div className="w-1/6 h-full">
        <LeftPannel />
      </div>
      <div className="w-5/6 h-full">
          <div className="h-full w-full flex flex-col p-3">
          <HeaderContacto />
        <div className='flex gap-3'>
          <div className='w-2/6 h-full '>

            <Usuario nombre={persona.nombre} posicion={persona.posicion} inicial={persona.bgLetra} label={persona.label}/>

            <InfoUsuario icono={faBuilding} texto="Empresa" nombre={persona.compania || "-"} />
            <InfoUsuario icono={faEnvelope} texto="Email" nombre={persona.email || "-"} />
            <InfoUsuario icono={faPhone} texto="Telefono" nombre={persona.phone || "-"} />
            <InfoUsuario icono={faLocationDot} texto="Direccion" nombre={persona.ubicacion || "-"} />
            <InfoUsuario icono={faCalendar} texto="Ultimo Contacto" nombre={persona.ultimoContacto || "-"} />

            <Etiquetas items={etiquetas} />
            <NotasRapidas />
          </div>

          <div className='w-4/6 h-full '>
            <HistorialActividades arr={info}/> 
          </div>

        </div>

        </div>
      </div>   
    </div>
  )
}

export default DetalleContactoPage;