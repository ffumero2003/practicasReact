// Código y Símbolo de Monedas: "Crea un arreglo de objetos con el código de la moneda y su símbolo para cada país." (Considerar el caso de múltiples monedas por país).
import { useState, useEffect } from "react";

function Practica14(){
  const [pais, setPaises] = useState([])

  useEffect(() =>{
    fetch('/paises.json')
      .then(response =>{
        if(!response.ok){
          throw new Error("No carga")
        }
        return response.json()
      })
      .then(data => {
        const result = []
        data.forEach(country => Object.entries(country.currencies)
          .forEach(([codigo, detalles]) => {
            result.push({nombre: detalles.name, simbolo: detalles.symbol})
        }))
        setPaises(result)
      })
      .catch(error => console.error(error))
  }, [])

  return(
    <div>
      {pais.map((p, i) => {
        return <p key={i}>{p.nombre}: {p.simbolo}</p>
      })}
    </div>
  )
}

export default Practica14;