import { useState, useEffect } from "react";
import axios from 'axios';
// 7. Mostrá las ubicaciones agrupadas por tipo en un objeto.

export default function Practica7(){
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

  let obj = {}
  data.forEach(loc => {
    if(!obj[loc.dimension]){
      obj[loc.dimension] = []
    }

    obj[loc.dimension].push(loc.name)
  })

  return(
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        Object.entries(obj).map(([nomDimension, locationName], i) => {
          return(
            <div key={i}>
              <h1>{nomDimension}</h1>
              {locationName.map((char,i) => {
                return(
                  <div key={i}>
                    <p>{char}</p>
                  </div>
                )
              })}
            </div>
          )
        })
      )}
    </div>
  )
}