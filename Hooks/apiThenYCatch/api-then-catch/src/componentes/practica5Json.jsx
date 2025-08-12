//   // Países Independientes: "Filtra y muestra solo los países que son considerados 'independent'."
import { useState, useEffect } from "react";

function Practica5(){
  const [pais, setPais] = useState([])

  useEffect(() => {
    fetch('/paises.json')
      .then(res =>{
        if(!res.ok){
          throw new Error("No carga")
        }
        return res.json();
      })
      .then(data => {
        const independentCountries = data.filter(country => {
          if(country.independent){
            return true
          }
        })
        setPais(independentCountries)
      })
      .catch(error => console.error(error))
  })

  return(
    <div>
      <h1>Paises Independientes</h1>
      {pais.map((p, i) => {
        return <li key={i}>{p.name.common}</li>
      })}
    </div>
  )
}

export default Practica5;