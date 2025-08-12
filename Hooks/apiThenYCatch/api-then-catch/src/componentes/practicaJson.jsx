import { useState, useEffect } from "react"

function Practica(){
  const [pais, setPais] = useState([])
// Países de una Región: "Obtén una lista de todos los países que pertenecen a la región de 'Europe'."

  // const [id, setId] = useState(0)
  useEffect(() => {
    fetch('/paises.json')
      .then(res =>{
        if(!res.ok){
          throw new Error("No cargo")
        }
        return res.json()
     })
     .then(data => {
      const europeanCountries = data.filter(country => country.region === "Europe")
      setPais(europeanCountries)
     })
     .catch(error =>{
      console.error(error)
     }
     )
  }, []);


  return(
    <>
    <h1>Paises Europeos</h1>
    <ul>
      {pais.map((p, i) => {
        return <li key={i}>{p.name.common}</li>
      })}
    </ul>
    </>
  )
}

export default Practica;