// Países por Área (Descendente): "Ordena los países por su área de mayor a menor."
import { useState, useEffect } from "react";

function Practica20(){
  const [pais, setPais] = useState([])

  useEffect(() => {
    fetch('/paises.json')
      .then(res => {
        if(!res.ok){
          throw new Error("no carga")
        }
        return res.json()
      })
      .then(data => {
        const mayorMenor = data.sort((a, b) => b.area - a.area)
        setPais(mayorMenor)
      })
      .catch(error => console.error(error))
  }, [])
  return(
    <>
    {pais.map((p, i) => {
      return <p key={i}>{p.name.common}: {(p.area / 1_000).toFixed(1)} mil de km</p>
    })}
    </>
  )
}

export default Practica20