import Header from '../components/page2/header'
import Titulo from '../components/page2/titulo'
import Updates from '../components/page2/updates'
import Botones from '../components/page2/botones'
import Card from '../components/page2/card'
import LeftPannel from "../components/left pannel/leftPannel"
import {  faUser, faBuilding, faEye, faPhone  } from '@fortawesome/free-solid-svg-icons'


function GestionContactos(){

  const stats = [
    {icon: faUser, num: 8, text: "Total", textColor: "text-blue-700", bg: "bg-blue-100"},
    {icon: faBuilding, num: 3, text: "Clientes", textColor: "text-green-700", bg: "bg-green-100"},
    {icon: faEye, num: 3, text: "Prospectos", textColor: "text-yellow-700", bg: "bg-yellow-100"},
    {icon: faPhone, num: 8, text: "Activos", textColor: "text-purple-700", bg: "bg-purple-100"}
  ]

  const personas =[
    {
      bgLetra: "C",
      nombre: "Carlos Ruiz",
      posicion: "CEO",
      label: "prospecto",
      compania: "Innovar Consulting",
      email: "carlos@innovar.com",
      phone: "+ 34 913 456 789",
      ubicacion: "Paseo de la Castellana 100, Madrid",
      detalles : ["ceo", "consulting", "potencial-alto"],
      colorLetra: "text-yellow-700",
      colorBg: "bg-yellow-200"
    },
    {
      bgLetra: "A",
      nombre: "Ana Martin",
      posicion: "CTO",
      label: "activo",
      compania: "StartUp Digital",
      email: "ana.martin@startup.es",
      phone: "+ 34 915 678 901",
      ubicacion: "Gran Via 28, Madrid",
      detalles : ["tech", "startup", "innovacion"],
      colorLetra: "text-blue-700",
      colorBg: "bg-blue-200"
    },
    {
      bgLetra: "R",
      nombre: "Roberto Silva",
      posicion: "Director Comercial",
      label: "cliente",
      compania: "Global Corp",
      email: "r.silva@gloablcorp.com",
      phone: "+ 34 917 890 123",
      ubicacion: "Torre Picasso, Madrid",
      detalles : ["corpotativo", "ventas", "internacional"],
      colorLetra:"text-green-700" ,
      colorBg: "bg-green-200"
    }
  ]
  return(
    <div className='h-screen flex gap-2  p-3 '>
  
      <div className='w-1/6 h-full'>
        <LeftPannel />
      </div>
      
      <div className='w-5/6 h-full'>
          <div className='flex w-full justify-between'>
            <Header title="Contacts"/>
          </div>
          <Titulo />
          <Updates stats={stats}/>
          <Botones />
          <div className="flex w-full p-3 gap-6 ">
            <Card array={personas} /> 
          </div>
      </div>
    </div>
  )
}

export default GestionContactos;