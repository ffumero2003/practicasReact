// // Países con Capital Específica: "Encuentra el país cuya capital es 'Madrid'."

import { useState, useEffect } from "react";

function Practica3(){
  const [pais, setPais] = useState([]);

  useEffect(() => {
    fetch('/paises.json')
      .then(res =>{
        if(!res.ok){
          throw new Error("No carga")
        }
        return res.json();
      })
      .then(data => {
        const madrid = data.filter(country => country.capital[0] === "Madrid")
        setPais(madrid)
      })
      .catch(error =>{
        console.error(error)
      })
  }, [])
  return(
    <>
    {pais.map((p, i) => {
      return <h1 key={i}>{p.name.common} tiene a la capital de madrid</h1>
    })}
    </>
  )
}

export default Practica3;