  // // Países con Múltiples Monedas: "Lista los nombres de los países que utilizan más de una moneda." (Asumiendo un objeto currencies donde las claves son los códigos de moneda).
import { useState, useEffect } from "react";

function Practica8(){
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
        const multiplesMonedas = data.filter(country => {
          if(Object.keys(country.currencies).length > 1 ){
            return true;
          }
          
        })
        setPais(multiplesMonedas)
      })

      .catch(error => console.error(error))
  }, [])

  return(
    <div>
      {pais.map((p, i) => {
        return <p key={i}>{p.name.common}</p>
      })}
    </div>
  )
}

export default Practica8;