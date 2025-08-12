import { useState, useEffect } from "react";
// 4. Primer personaje listado por cada especie
// Mostrá solo el primero que aparece por especie
export default function Practica4(){
  const [usuario, setUsuario] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const info = async() =>{
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
        setCargando(false)
      }
    }
    info()
  }, [])
  const obj = {}
  usuario.forEach(char => {
    const especie = char.species;

    if(!obj[especie]){
      obj[especie] = char.name
    }

    
  })
  return(
    <>
  
      {Object.entries(obj).map(([especie, nombre], i) => {
        return(
        <div key={i}>
          <h1>{especie}</h1>
          <p>{nombre}</p>
        </div>
        )
      })}
  
    </>
  )
}

