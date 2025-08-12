  // // Países Cuya Área es Menor a X: "Filtra los países cuya área es menor a 10,000 kilómetros cuadrados."
import { useState, useEffect } from "react";

function Practica9(){
  const [pais, setPais] = useState([])

  useEffect(() => {
    fetch('/paises.json')
      .then(res => {
        if(!res.ok){
          throw new Error("no carga")
        }
        return res.json()
      })
      .then(data => {
        const areaMenor = data.filter(country => {
          if(country.area < 10_000){
            return true
          }
        })
        setPais(areaMenor)
      })
      .catch(error => console.error(error))

  }, [])

  return(
    <>
      {pais.map((p, i) => {
        return <p key={i}>{p.name.common}</p>
      })}
    </>
  )
}

export default Practica9;