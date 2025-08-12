// País con Mayor Población: "Encuentra el país con la mayor población." (Sin usar sort).
import { useState, useEffect } from "react";

function Practica18(){
  const [pais, setPais] = useState(null)

  useEffect(() => {
    fetch('/paises.json')
      .then(res => {
        if(!res.ok){
          throw new Error("No carga")
        }
        return res.json()
      })
      .then(data => {
        const mayorPoblacion = data.reduce((acum, curren) => {
          return curren.population > acum.population ? curren : acum;
        })
        setPais(mayorPoblacion)
      })
      .catch(error => console.error(error))
  }, [])
  return(
    <>
    {pais && (
      <p>{pais.name.common} tiene un total de {(pais.population / 1_000_000).toFixed(2)}millones de habitantes</p>
  )}
    </>
  )
}

export default Practica18