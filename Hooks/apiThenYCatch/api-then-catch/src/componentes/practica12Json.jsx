// Nombres de Países y sus Regiones: "Genera un arreglo de objetos, donde cada objeto tenga las propiedades nombre (nombre común del país) y region."
import { useState, useEffect } from "react";

function Practica12(){
  const [pais, setPais] = useState([])

  useEffect(() =>{
    fetch('/paises.json')
      .then(res =>{
        if(!res.ok){
          throw new Error("no carga")
        }
        return res.json()
      })
      .then(data => {
        const paisesRegiones = data.map(country => `${country.name.common}: ${country.region}`)
        setPais(paisesRegiones)
      })
      .catch(error => console.error(error))
  }, [])

  return(
    <>
      {pais.map((paisRegion, i) =>{
        return <p key={i}>{paisRegion}</p>
      })}
    </>
  )
}

export default Practica12;