// Población en Millones: "Transforma el arreglo de países en uno que muestre el nombre del país y su población expresada en millones."
import { useState, useEffect } from "react";

function Practica13(){
  const [pais, setPais] = useState([])

  useEffect(() => {
    fetch('/paises.json')
      .then(response => {
        if(!response.ok){
          throw new Error("No carga")
        }
        return response.json()
      })
      .then(data => {
        const arreglo = data.map(country => `${country.name.common}: ${(country.population / 1_000_000).toFixed(1)} millones`)
        setPais(arreglo)
      })
      .catch(error => console.error(error))
  }, [])

  return(
    <>
      {pais.map((paises, i) =>{
        return <p key={i}>{paises}</p>
      })}
    </>
  )
}

export default Practica13; 