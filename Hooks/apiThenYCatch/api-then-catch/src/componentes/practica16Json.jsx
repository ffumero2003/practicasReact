// Población Total del Mundo: "Calcula la población total de todos los países en el JSON."
import { useState, useEffect } from "react";

function Practica16(){
  const [pais, setPais] = useState([])

  useEffect(() => {
    fetch('/paises.json')
      .then(res => {
        if(!res.ok){
          throw new Error("No carga")
        }
        return res.json()
      })
      .then(data =>{
        
        const totalPop = data.reduce((acum, curren) => {
          return acum + curren.population;
        }, 0)

        setPais(totalPop)
      })
      .catch(error => console.error(error))
  }, [])


  return(
    <>
    <h1>Poblacion Total</h1>
    {`hay ${(pais / 1_000_000).toFixed(1)} millones de personas`}
    </>
  )
}

export default Practica16