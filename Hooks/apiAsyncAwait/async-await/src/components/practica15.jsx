import { useState, useEffect } from "react";
// 15. Personajes ordenados alfabéticamente por nombre

export default function Practica15(){
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

  const abc = [...usuario].sort((a, b) => a.name.localeCompare(b.name))
  return(
    <>
      {abc.map((char, i) => {
        return <p key={i}>{char.name}</p>
      })}
    </>
  )
}