//  Nombres de Capitales: "Crea un arreglo con los nombres de todas las capitales de los países." (Asumiendo que capital es un array).
import { useState, useEffect } from "react";

function Practica11(){
  const [pais, setPais] = useState([])

  useEffect(() => {
    fetch('/paises.json')
      .then(res => {
        if(!res.ok){
          throw new Error("No carga")
        }
        return res.json()
      })
      .then(data => {
        const capitales = data
        .filter(country => country.capital && country.capital.length > 0)
        .map(country => country.capital[0])
        setPais(capitales)
      })
      .catch(error => console.error(error))
  }, [])

  return(
    <>
      {pais.map((p, i ) => {
        return <p key={i}>{p}</p>
      })}
    </>
  )
}

export default Practica11;