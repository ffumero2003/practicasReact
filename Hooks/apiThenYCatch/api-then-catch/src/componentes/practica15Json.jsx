// Países con el Sufijo de su Demónimo: "Genera un arreglo que contenga cadenas como 'Canadá (Canadian)', donde 'Canadian' es el demonym femenino o masculino."

import { useState, useEffect } from "react";

function Practica15(){
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
        const result = []
        data.forEach(country => 
          Object.entries(country.demonyms)
          .forEach(([codigo, detalles]) =>{
            result.push({pais: country.name.common, demonimos: detalles.m})
          }))
          setPais(result)
      })
      .catch(error => console.error(error))
  }, [])
  return(
    <div>
      {pais.map((p, i) =>{
        return <p key={i}>{p.pais}({p.demonimos})</p>
      })}
    </div>
  )
}

export default Practica15;