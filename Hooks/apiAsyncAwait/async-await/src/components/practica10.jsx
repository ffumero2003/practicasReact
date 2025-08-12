import { useState, useEffect } from "react";
// 10. Episodios donde aparece Rick Sanchez
// Buscá el personaje Rick y mostrá los IDs de sus episodios
export default function Practica10(){
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


  const rick = usuario.find(char => char.name === "Rick Sanchez")
  const total = rick ? rick.episode.length : 0;
  return(
    <>
    {!cargado && (
      <p>Rick sanchez estuvo en {total} episodios</p>
    )}
    </>
  )
}