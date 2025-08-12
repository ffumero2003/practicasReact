import { useState, useEffect } from "react";
import axios from 'axios';
// 3. Mostrá las ubicaciones que tienen más de 10 residentes.

export default function Practica3(){
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

  const resdientes = data.filter(loc => loc.residents.length > 10)


  return(
    <>
    {loading ? (
      <p>cargando</p>
    ) : (
      resdientes.map((loc, i) => {
        return(
          <div key={i}>
            <p>{loc.name} tiene mas de 10 residentes, tiene {loc.residents.length} residentes</p>
          </div>
        )
      })
    )}
    </>
  )
}