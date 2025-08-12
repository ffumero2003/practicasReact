import { useState, useEffect } from "react";
import  axios  from "axios";
// 8. Contá cuántas ubicaciones hay por dimensión.

export default function Practica8(){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async() => {
      try{
        const res = await axios.get('https://rickandmortyapi.com/api/location')
        setData(res.data.results)
      } catch(error) {
        console.error(error)
      } finally{
        setLoading(false)
      }
    
    }
    fetchData()
  }, [])


  let obj = {}
  data.forEach(loc => {
    if(!obj[loc.dimension]){
      obj[loc.dimension] = []
    }

    obj[loc.dimension].push(loc.name)
  })

  return (
  <>
    {loading ? (
      <p>Cargando...</p>
    ) : Object.keys(obj).length === 0 ? (
      <p>No se encontraron ubicaciones</p>
    ) : (
      Object.entries(obj).map(([locDimension, locName], i) => (
        <div key={i}>
          <h1>{locDimension}</h1>
          <p>has a total of {locName.length}</p>
        </div>
      ))
    )}
  </>
);

}