import { useState, useEffect } from "react";
// 14. Número total de personajes listados
// Mostrá data.info.count del primer fetch
export default function Practica14(){
  const [usuario, setUsuario] = useState([])
  const [cargado, setCargado] = useState(true)


  useEffect(() => {
    const info = async() => {
      try{
        const res = await fetch('https://rickandmortyapi.com/api/character')
        if(!res.ok){
          throw new Error("No carga")
        }
        const data = await res.json()
        setUsuario(data.results)
      } catch(error){
        console.error(error)
      } finally{
        setCargado(false)
      }       
    }

 info()
  }, [])


  const total = usuario.reduce((acum, char) => {
    return char.id > acum.id ? char : acum;
  }, usuario[0])
  return(
    <>
    <h1>Num total de personajes listados {total.id}</h1>
    
    </>
  )
}