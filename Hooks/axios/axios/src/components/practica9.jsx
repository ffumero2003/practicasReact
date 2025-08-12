import { useState, useEffect } from "react";
import axios from 'axios';
// 9. Mostrá las 5 ubicaciones con más residentes.

export default function Practica9(){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async() => {
      try{
        const res = await axios.get("https://rickandmortyapi.com/api/location")
        setData(res.data.results)
      } catch(error) {
        console.error(error)
      } finally{
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const masResidentes = [...data].sort((a,b) => b.residents.length - a.residents.length).slice(0,5)

  return(
    <>
    {loading ? (
      <p>loading...</p>
    ) : (
      masResidentes.map((loc, i) => {
        return(
          <div key={i}>
            <p>{loc.name} has {loc.residents.length}</p>
          </div>
        )
      })
    )}
    </>
  )
}