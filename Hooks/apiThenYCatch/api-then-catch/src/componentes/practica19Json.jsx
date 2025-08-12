// Países por Población (Ascendente): "Ordena los países por su población de menor a mayor."
import { useState, useEffect } from "react";

function Practica19(){
  const [pais, setPais] = useState([])

  useEffect(() => {
    fetch('/paises.json')
      .then(res =>{
        if(!res.ok){
          throw new Error("No Carga")
        } 
        return res.json()
      })
      .then(data => {
        const menorMayor = data.sort((a, b) => a.population - b.population);
        setPais(menorMayor)
      })
      .catch(error => console.error(error))
  }, [])
  return(
    <>
    {pais.map((p, i) => {
      return <p key={i}>{p.name.common}: {(p.population / 1_000_000).toFixed(1)} millones </p>
    })}
    </>
  )
}

export default Practica19