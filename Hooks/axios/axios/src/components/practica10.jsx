import { useState, useEffect } from "react";
import axios from 'axios'
// 10. Mostrá el total de residentes sumando todas las ubicaciones.

export default function Practica10(){
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

 const arr = data.map(loc => loc.residents.length)
 return(
  <>
  {loading ? (
    <p>loading</p>
  ) : (
    <p>Total: {arr.reduce((acum, quantity) => acum + quantity, 0)}</p>
  )}
  </>
 )
}