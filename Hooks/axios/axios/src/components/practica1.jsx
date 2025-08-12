import { useState, useEffect } from "react";
import axios from 'axios';
// 1. Listá el nombre de todas las ubicaciones disponibles.


export default function Practica1(){
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

  let arr = []
  data.forEach(loc => {
    if(!arr.includes(loc.name)) {
      arr.push(loc.name)
    }
  })

  return(
    <>
    {loading ? (
      <p>Loading...</p>
    ) : (
      arr.map((char, i) => (
        <p key={i}>{char}</p>
      ))
    )}
    </>
  )
}