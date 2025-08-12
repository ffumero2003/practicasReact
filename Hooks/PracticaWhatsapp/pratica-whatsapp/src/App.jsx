
// import TestComponent from './pages/useEffectUseState'
// import {  QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import CharacterDetailComponent from './pages/hookQuery'
// import Formulario from './pages/formularioDinamico'
import AddToCart from "./pages/addToCart"
import Search from "./pages/SearchConSugerencias"
import SearchWithoutMemo from "./pages/searchSinUseMemo";
import SearchWithDebounce from "./pages/searchSInMemoConDebounce";
import Timer from "./pages/timer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


function App() {
  // const [count, setCount] = useState(0)

  // const queryClient = new QueryClient();

  const queryClient = new QueryClient();

  return (
    <>
      {/* <TestComponent />
      <QueryClientProvider client={queryClient}>
        <CharacterDetailComponent />
      </QueryClientProvider> */}
      {/* <Formulario /> */}
      {/* <AddToCart /> */}
      {/* <QueryClientProvider client={queryClient}>
        <SearchWithDebounce />
      </QueryClientProvider> */}
      <Timer />

    </>
  )
}

export default App
