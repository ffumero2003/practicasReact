import { useState, useEffect } from "react";
import axios from 'axios';
// 6. Filtrá las ubicaciones cuyo nombre incluya la palabra "Earth".


export default function Practica6(){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location')
      .then(res => {
        setData(res.data.results)
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  const earth = data.filter(loc => loc.name.includes("Earth"))

  return(
    <>
      {loading ? (
        <p>Cargando</p>
      ) : (
        earth.map((char, i) => {
          return(
            <div key={i}>
              <p>{char.name}</p>
            </div>
          )
        })
      )}
    </>
  )
}