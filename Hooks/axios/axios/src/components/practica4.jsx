import { useState, useEffect, useSyncExternalStore } from "react";
import axios from 'axios';
// 4. Ordená las ubicaciones por cantidad de residentes, de mayor a menor.
export default function Practica4(){
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

  const mayorMenor = data.filter(loc => loc.residents.length).sort((a, b) => b - a);
  // const sorteo = mayorMenor.sort((a, b) => b - a);
  return(
    <div>
      {loading ? (
        <p>cargando</p>
      ) : (
        mayorMenor.map((loc, i) => {
          return(
            <>
              <p key={i}>{loc.name} tiene {loc.residents.length}</p>
            </>
          )
        })
        
      )}
    </div>
  )
}

