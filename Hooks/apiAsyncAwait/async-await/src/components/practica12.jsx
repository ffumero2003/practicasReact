import { useState, useEffect } from "react";
// 12. Orígenes únicos
// Mostrá una lista sin repetir de todos los origin.name

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


  let arr = []
  usuario.forEach(char => {
    if(!arr.includes(char.origin.name)){
      arr.push(char.origin.name)
    }
  })
  return(
    <>
    {!cargado && (
      arr.map((origen, i) => {
        return <p key={i}>{origen}</p>
      })
    )}
    </>
  )
}