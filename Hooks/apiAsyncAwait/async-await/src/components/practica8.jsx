import { useState, useEffect } from "react";
// 8. Promedio de cantidad de episodios por personaje


export default function Practica8(){
  const [usuario, setUsuario] = useState([])
  const [cargado, setCargado] = useState(true)

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
      } finally{
        setCargado(false)
      }
    }

    info()
  }, [])

  const epi = usuario.map(char => char.episode.length)
  const total = epi.reduce((acum, num) => acum + num, 0)
  const promedio = epi.length > 0 ? total / epi.length : 0
  console.log(promedio)

  
  return(
    <>
    <h1>El promedio</h1>
    {cargado ? (
      <p>Cargando</p>
    ): (
      <p>El average es {promedio}</p>
    )}
    </>
  )
}