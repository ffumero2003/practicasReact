import { useState, useEffect } from "react";
// 3. Lista de especies y cuántos personajes hay por especie
// Creá un objeto donde cada key sea una especie y el valor sea un array con sus nombres

export default function Practica3(){
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
      } finally{
        setCargando(false)
      }
    }

    info();

  }, [])

  const obj = {}
  usuario.forEach(char => {
    const especie = char.species;

    if(!obj[especie]){
      obj[especie] = []
    }

    obj[especie].push(char.name)
  })
  return(
    <>
    {Object.entries(obj).map(([especie, nombre], i) => {
      return <li key={i}>
        <h1>{especie} con un total de {nombre.length}</h1>
        {nombre.map((nom, j) => {
          return <li key={j}>{nom}</li>
        })}
      </li>
    })}
    </>
  )
}