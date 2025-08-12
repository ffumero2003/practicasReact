import { useState, useEffect } from "react";
import axios from 'axios'
// 14. Filtrá las ubicaciones que no tengan tipo definido (type vacío).

export default function Practica14(){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const info = async() => {
      try{
        const res = await axios.get('https://rickandmortyapi.com/api/location')
        setData(res.data.results)
      } catch(error){
        console.error(error)
      } finally{
        setLoading(false)
      }
    }
    info()
  }, [])

  const tipo = data.filter(loc => loc.type.toLowerCase() === "planet")

  return(
    <div>
      {loading ? (
        <p>loading</p>
      ) : (
        tipo.map((loc, i) => {
          return <p key={i}>{loc.name}</p>
        })
      )}
    </div>
  )
}