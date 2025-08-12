// // Países que Hablan un Idioma Específico: "Lista todos los países donde el idioma oficial es 'Spanish'." (Asumiendo que los idiomas están en un objeto donde los valores son los nombres de los idiomas).
import { useState, useEffect } from "react";

function Practica4(){
  const [pais, setPais] = useState([])

  useEffect(() => {
    let arr = []
    fetch('/paises.json')
      .then(res => {
        if(!res.ok){
          throw new Error("No carga")
        }
        return res.json()
      })
      .then(data => {
       
        data.forEach(country => {
            // if(country.languages === "Spanish"){
            //   setPais.push(Object.values(country.languages)) //aplana array de array de [[spanisih], [spanish]] a [spanish, spanish]
            // }
           const span = data.filter(country => {
            if(Object.values(country.languages).includes("Spanish")){
              return true
            }
           })
           setPais(span)
          });
          
           
        })
        .catch(error => console.error(error))
       
      }, []);
      



  
  return(
    <>
    <h1>Paises donde se habla español</h1>
    <ul>
      {pais.map((p, i) => {
        return <li key={i}>{p.name.common}</li>
      })}
    </ul>
    </>
  )
}

export default Practica4;
