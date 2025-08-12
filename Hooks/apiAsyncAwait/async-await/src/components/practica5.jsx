import { useState, useEffect } from "react";

export default function Practica5(){
  // 5. Personajes con más de 1 episodio
// Filtrá los que tengan episode.length > 1
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

    info()
  }, [])

  return(
    <>
    {usuario
    .filter(char => char.episode.length > 1)
    .map((char, i) => (
      <p key={i}>{char.name} aparece en {char.episode.length}</p>
    ))}
    </>
  )
}