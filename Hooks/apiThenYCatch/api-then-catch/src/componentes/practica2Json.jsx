//   // Países con Población Mayor a X: "Encuentra todos los países cuya población sea mayor a 100,000,000 habitantes."
import { useState, useEffect } from "react";

function Practica2(){
  const [pais, setPais] = useState([]);

  useEffect(() => {
    fetch('/paises.json')
      .then(res => {
        if(!res.ok){
          throw new Error("No Carga")
        }
        return res.json()
      })
      .then(data => {
        const poblacion = data.filter(country => country.population > 100000000)
        setPais(poblacion)
      })
      .catch(error =>{
        console.error(error)
      })
  }, [])
    return(
    <>
      <h1>Paises con mas de 100 millones de habitantes</h1>
      <ul>
        {pais.map((p, i) => {
          return <li key={i}>{p.name.common} tiene {(p.population / 1_000_000).toFixed(1)} millones</li>
        })}
      </ul>
    </>
  )

}


export default Practica2;