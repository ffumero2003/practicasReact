import { useState, useEffect } from "react";
import axios from 'axios'
// 12. Mostrá los tipos únicos de ubicaciones disponibles.

export default function Practica12(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const info = async () => {
      try {
        const res = await axios.get('https://rickandmortyapi.com/api/location');
        setData(res.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    info(); 
  }, []);

  let arr = []
  data.forEach(loc => {
    if(!arr.includes(loc.type)){
      arr.push(loc.type)
    }
  })

  return(
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        arr.map((loc, i) => {
         return <p key={i}>{loc}</p>
        })
      )}
    </div>
  )
}
