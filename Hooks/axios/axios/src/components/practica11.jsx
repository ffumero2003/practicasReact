import { useState, useEffect } from "react";
import axios from 'axios'
// 11. Mostrá solo las ubicaciones sin residentes.


export default function Practica11(){
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

  const sinResid = data.filter(loc => loc.residents.length === 0)

  return(
    <div>
      {loading ? (
        <p>cargando</p>
      ) : (
        sinResid.map(loc => loc.name)
      )}

    </div>
  )
}