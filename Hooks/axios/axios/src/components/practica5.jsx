import { useState, useEffect } from "react";
import axios from 'axios';
// 5. Mostrá la primera ubicación de tipo "Space station".

export default function Practica5(){
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

  const space = data.find(loc => loc.type === "Space station")

  return(
    <>
      {loading ? (
        <p>Cargando</p>
      ) : space ? (
        <p>{space.name}</p>
      ) : (
        <p>no se encontro ninguno</p>
      )}
    </>
  )
}