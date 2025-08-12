import { useState, useEffect } from "react";
// 2. ¿Existe algún personaje cuyo tipo sea "Parasite"?
// Usá .some() para verificarlo
export default function Practica2(){
  const [usuario, setUsuario] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const info = async() => {
      try{
        const response = await fetch('https://rickandmortyapi.com/api/character')
        if(!response.ok){
          throw new Error("No carga")
        }
        const data = await response.json()
        setUsuario(data.results)
      } catch(error){
        console.error(error)
      }finally{
        setCargando(false)
      }

    }
    info();
  }, [])

  // const para = usuario.some(char => char.type === "Parasite")
  const parasite = usuario.find(char => char.type === "Parasite")
  return(
    <>
    {parasite ? <p>True {parasite.name}</p> : <p>false</p>}
    </>
  )
}