import { useState, useEffect } from "react";

// 7. Top 3 personajes con más episodios
// Ordená por episode.length y mostrá los 3 primeros
export default function Practica7(){
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

  const episodes = usuario.sort((a, b) => b.episode.length - a.episode.length).slice(0, 3)
  return(
    <>
    {cargado ? (
      <p>Crgando</p>
    ) : (
    episodes.map((char, i) => {
      return <p key={i}>{char.name} has {char.episode.length}</p>
    }))}
    
    </>
  )
}