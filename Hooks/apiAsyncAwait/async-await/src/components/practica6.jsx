import { useState, useEffect } from "react";
// 6. Personajes que estén vivos y de género "Female"

export default function Practica6(){
  const [usuario, setUsuario] = useState([])
  const [cargado, setCargado] = useState(true)

  useEffect(() => {
    const info = async() => {
      try{
        const res = await fetch('https://rickandmortyapi.com/api/character')
        if(!res.ok){
          throw new Error("Error")
        }
        const data = await res.json()
        setUsuario(data.results)
      } catch(error){
        console.error(error)
      } finally{
        setCargado(false)
      }

    }
    info();
  }, [])
  return(
    <>
    {usuario
    .filter(char => char.status === "Alive" && char.gender === "Female")
    .map((char, i) => (
      <p key={i}>{char.name} is alive and is a female</p>
    ))}
    </>
  )
}