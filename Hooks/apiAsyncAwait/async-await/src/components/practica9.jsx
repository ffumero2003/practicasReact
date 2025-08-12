import { useState, useEffect } from "react";
// 9. Personajes cuya ubicación actual incluye la palabra "Earth"

export default function Practica9(){
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


  return(
    <>
    {cargado ? (
      <p>Cargando</p>
     ) : (
      usuario
      // .filter(char => char.location.name === "Earth")
      .filter(char => char.location.name.includes("Earth"))
      .map((char, i) => (
        <p key={i}>{char.name} is from {char.location.name}</p>
      ))
    )}
    </>
  )
}