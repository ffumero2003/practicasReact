  // // Existe País con Nombre Específico: "Verifica si existe un país llamado 'Brazil' en el conjunto de datos." (Usar some).

  import { useState, useEffect } from "react";

  function Practica10(){
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
          const brazil = data.filter(country => country.name.common === "Brazil");
          setPais(brazil)
        })
        .catch(error => console.error(error))

    }, [])

    return(
      <>
        {pais.map((p, i) => {
          return <p key={i}>{p.name.common}</p>
        })}
      </>
    )
  }

  export default Practica10;