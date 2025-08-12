  // // Países de una Subregión: "Obtén todos los países que están en la 'South America' subregión."
import { useState, useEffect } from "react";

function Practica7(){
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
        const surAmerica = data.filter(country =>{
          if(country.subregion === "South America")
            return true
        })

        setPais(surAmerica)
      })

      .catch(error => console.error(error))
  }, [])

  return(
    <div>
      <h1>Sur America</h1>
      {pais.map((p, i) =>{
        return <p key={i}>{p.name.common}</p>
      })}
    </div>
  )
}
export default Practica7;