import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function SearchWithDebounce(){
  const [input, setInput] = useState("")
  const [suggestions, setSuggestions] = useState([])

  const { data, isLoading, isError } = useQuery({ 
    queryKey: ["rickAndMortySinMemoConDebounce"],
    queryFn: async() => {
      const res = await fetch('https://rickandmortyapi.com/api/location')
      if(!res.ok){
        throw new Error("No Carga")
      }
      const data = await res.json()
      return data.results
    },
  });

  if(isLoading) return <p>Esta cargando...</p>
  if(isError) return <p>Hubo un error</p>

  function debounce(func, delay) {
    let timer;
    return function(...args){
      clearTimeout(timer)
      timer = setTimeout(() => func.apply(this, args), delay)
    }
  }

  const handleSuggestions = debounce((texto) => {
    if(!data) return;

    if(texto.trim() === ""){
      setSuggestions([])
      return;
    }

    const resultados = data.filter(loc => 
      loc.name.toLowerCase().includes(texto.toLowerCase())
    )

    setSuggestions(resultados)
  }, 300)

  const handleChange = (e) => {
    const valor = e.target.value
    setInput(valor)
    handleSuggestions(valor)
  }

  return(
    <div>
      <input type="text"
      value={input}
      onChange={handleChange} />

      {input && suggestions.length === 0 && !isLoading &&(
        <p>No hay nada que mostrar, busque un location</p>
      )}

      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((sugg) => {
            return <li key={sugg.id}>{sugg.name}</li>
          })}
        </ul>
      )}
    </div>
  )
}

export default SearchWithDebounce