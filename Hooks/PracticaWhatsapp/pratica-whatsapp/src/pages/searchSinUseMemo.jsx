import { useQuery } from '@tanstack/react-query'
import { useState } from "react";

function SearchWithoutMemo(){
  const [input, setInput] = useState("")
  const [suggestions, setSuggestions] = useState([])

  const { data, isLoading, isError } = useQuery({
    queryKey: ["rickMortySinMemo"],
    queryFn: async() => {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      if(!res.ok){ throw new Error("No carga")}
      const data = await res.json()
      return data.results
    },
  });

  const handleChange = (e) => {
    const valor = e.target.value;
    setInput(valor)

    if(!data) return;

    if(valor.trim() === ""){
      setSuggestions([])
      return
    }

    const resultados = data.filter(char => 
      char.name.toLowerCase().includes(valor.toLowerCase())
    ) 
    setSuggestions(resultados)
  }

  if(isLoading) return <p>Datos Cargando...</p>
  if(isError) return <p>Datos no cargaron</p>

  return(
    <div>
      <input 
      type="text"
      value={input}
      onChange={handleChange} />
      {input && suggestions.length === 0 && (
        <p>No hay resultados.</p>
      )}

      {suggestions.length > 0 && (
        <ul style={{listStyle: "none", padding: 0}}>
          {suggestions.map((sugg) => (
            <li key={sugg.id} style={{marginBottom: 8}}>
              {sugg.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchWithoutMemo;
