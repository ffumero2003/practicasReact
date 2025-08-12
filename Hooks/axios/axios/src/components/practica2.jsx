import { useState, useEffect } from "react";
import axios from 'axios';
// 2. Mostrá cuántas ubicaciones hay por tipo (ej: Planet, Space station, etc.).


export default function Practica2(){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location')
      .then(res => {
        setData(res.data.results);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
  }, [])
  let obj = {}
  data.forEach(loc => {
    if(!obj[loc.type]){
      obj[loc.type] =[]
    }
    obj[loc.type].push(loc.name)
  })

  return(
    <>
    {loading ? (
      <p>Loading</p>
    ) : (
      Object.entries(obj).map(([tipo, nombre],i) => {
        return(
          <div key={i}>
            <h1>{tipo}</h1>
            <ul>
              {nombre.map((nom, j)  => (
                  <div>
                    <li key={j}>{nom}</li>
                  </div>
              ))}
            </ul>
          </div>
        )
      })
    )}
    
    </>
  )
}