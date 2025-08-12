  // Países sin Fronteras: "Encuentra todos los países que no tienen fronteras terrestres con otros países." (Asumiendo un campo borders que es un array).
import { useState, useEffect } from "react";

function Practica6(){
  const [pais, setPais] = useState([])

  useEffect(() => {
    fetch('/paises.json')
      .then(res =>{
        if(!res.ok){
          throw new Error("No carga")
        }
        return res.json()
      })
      .then(data => {
        const noBorders = data.filter(country => {
          if(country.borders.length === 0){
            return true
          }
        })
        setPais(noBorders)
      })
      .catch(error => console.error(error))

  }, [])

  return(
    <div>
      <h1>Countries with no borders</h1>
      {pais.map((p, i) => {
        return <p key={i}>{p.name.common}</p>
      })}
    </div>
  )
}

export default Practica6;