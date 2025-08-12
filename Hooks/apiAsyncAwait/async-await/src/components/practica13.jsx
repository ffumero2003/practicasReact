import { useState, useEffect } from "react";

// 13. Conteo de personajes por especie
// Igual que el 3, pero sin nombres. Solo cuántos hay por especie


export default function Practica12(){
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
  data.forEach(char => {
    if(!obj[char.species]){
      obj[char.species] = 0
    }
    obj[char.species]++
  })
  return(
    <>
    {Object.entries(obj).map(([especie, numero], i) => (
      <p key={i}>{especie} tiene un total de {numero}</p>
    ) 
    )}
    </>
  )

 
}



