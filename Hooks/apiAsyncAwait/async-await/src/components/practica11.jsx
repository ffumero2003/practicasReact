import { useState, useEffect } from "react";
// 11. Cantidad de personajes por género
// { Male: 200, Female: 120, Genderless: 30, unknown: 50 }

export default function Practica11(){
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


  let obj = {}
  usuario.forEach(char => {
    if(!obj[char.gender]){
      obj[char.gender] = []
    }
    obj[char.gender].push(char.name.length)
  })
  return(
    <>
    {Object.entries(obj).map(([genero, nombre], i) => {
      return (
        <h1 key={i}>{genero} tiene un total de {nombre.length}</h1>
      )
    })}
    </>
  )
}