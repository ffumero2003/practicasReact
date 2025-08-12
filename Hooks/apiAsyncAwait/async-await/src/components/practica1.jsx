import { useState, useEffect } from "react";
    // 1. Lista todos los personajes que son de especie "Alien"


export default function Practica1(){
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
      } finally {
        setCargando(false)
      }
    }
    info();
  }, [])
  const aliens = usuario.filter(char => char.species === "Alien")

  return(
    <>
    {aliens.map((char,i) => {
      return <li key={i}>{char.name}</li>
    })}
    </>
  )
}