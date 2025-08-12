// Idioma Más Común: "Determina cuál es el idioma que se habla en la mayor cantidad de países." (Requiere iterar sobre los idiomas de cada país).
import { useState, useEffect } from "react";

function Practica17(){
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
        const frec = data.reduce((acc, country) => {
          if(country.languages) {
            Object.keys(country.languages).forEach(code => {
              acc[code] = (acc[code] || 0) + 1;
            })
          }
          return acc;
        }, {})
        const masComun = Object.entries(frec).reduce((acc, [lang, count]) => {
          return count > acc.cantidad
          ? {idioma: lang, cantidad: count}
          : acc;
        }, {idioma: "", cantidad: 0});
        setPais(masComun)
      })
      .catch(error => console.error(error))

  }, {})
  return(
    <>
    
      <p>{pais.idioma}, ({pais.cantidad} paises)</p>
  
    </>
  )
}

export default Practica17