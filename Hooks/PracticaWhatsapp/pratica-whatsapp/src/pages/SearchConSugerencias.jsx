import { useQuery } from '@tanstack/react-query'
import { useState, useMemo } from 'react';

function Search(){
  const [input, setInput] = useState("")
  const [suggestions, setSuggestions] = useState([])

  const { data, isLoading, isError } = useQuery({
    queryKey: ["rickAndMorty"],
    queryFn: async() => {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      if(!res.ok) {
        throw new Error("No carga")
      }
      const data = await res.json()
      return data.results
    },
  });

  

  function debounce(func, delay){
    let timer;
    return function(...args){
      clearTimeout(timer)
      timer = setTimeout(() => func.apply(this, args), delay)
    }
  }

  const handleSuggestions = useMemo(() => {
    return debounce((texto) => {
      if(!data) return;

      if(texto.trim() === ""){
        setSuggestions([])
        return;
      }

      const resultados = data.filter(char => 
        char.name.toLowerCase().includes(texto.toLowerCase())
      )

      setSuggestions(resultados)
    }, 300)
  }, [data])

  const handleChange = (e) => {
    const valor = e.target.value;
    setInput(valor)
    handleSuggestions(valor)
  }

  if(isLoading) return <p>Datos cargando</p>
  if(isError) return <p>Error</p>

  return(
    <div>
      <input type="text"
      value={input} 
      onChange={handleChange}/>
      
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((sugg, i) => {
            return <li key={i}>{sugg.name}</li>
          })}
        </ul>
      )}
    </div>
  ) 
}

export default Search