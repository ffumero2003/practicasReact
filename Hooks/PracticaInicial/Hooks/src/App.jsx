

import './App.css'
import { useEffect, useState} from 'react'
import { useLocation, useParams } from 'react-router-dom';

function App() {
  const [characters, setCharacters] = useState([])
  const [id, setId] = useState(0)
  const location = useLocation();
  const params = new URLSearchParams(location.search)

  
  
  const usuario = params.get('usuario');
  const edad = params.get('edad')

  // const {id} = useParams();

  useEffect(() => {
    async function fetchData(){
      try{
        const res = await fetch('https://rickandmortyapi.com/api/character/' + id)
        const json = await res.json()
        setCharacters([json])
        console.log(json)
      } catch(error){
        console.error(error)
      }
    }
    fetchData();
    console.log(characters)
  }, [id])

  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1);
    setId(id + 1);

  }

  
  
 
  
  return (
    <div>
      <ul>
        {characters.map(char =>{
          return <li className='list-none' key={char.id}>{char.name}</li>
        })}
      </ul>
      <button onClick={handleClick} className='p-3'>Click</button>
      <p>{count}</p>
      <h1>{id}</h1>
      <h1 className='text-white'>{usuario}</h1>
      <p>{edad}</p>
    </div>
  )
}

export default App
