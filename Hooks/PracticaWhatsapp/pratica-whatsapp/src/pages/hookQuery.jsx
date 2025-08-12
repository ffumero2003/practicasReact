
import { QueryClient, useQuery } from '@tanstack/react-query';

// Crea una instancia de QueryClient. Esto es necesario para que useQuery funcione.
const queryClient = new QueryClient();

// Función asíncrona para obtener los datos del personaje
const fetchCharacterData = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character/125');
  if (!response.ok) {
    throw new Error('Failed to fetch character data');
  }
  return response.json();
};

// Componente que muestra los detalles del personaje usando useQuery
const CharacterDetailComponent = () => {
  // Usa el hook useQuery para gestionar la llamada a la API
  // queryKey: ['character', 105] es una clave única para esta consulta.
  // queryFn: la función que realiza la llamada a la API y devuelve una promesa.
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['character', 105],
    queryFn: fetchCharacterData,
    // Puedes añadir opciones adicionales aquí, por ejemplo:
    // staleTime: 5 * 60 * 1000, // Datos "frescos" por 5 minutos
    // retry: 1, // Reintentar la consulta 1 vez en caso de error
  });

  // Muestra un estado de carga mientras se obtienen los datos
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px] bg-gray-50 p-4 rounded-lg shadow">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-2"></div>
        <p className="text-lg text-gray-700">Cargando datos del personaje...</p>
      </div>
    );
  }

  // Muestra un mensaje de error si la consulta falla
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px] bg-red-100 p-4 rounded-lg shadow">
        <p className="text-lg text-red-700">Error al cargar los datos: {error.message}</p>
        <button
          onClick={() => refetch()} // Permite al usuario reintentar la carga
          className="mt-3 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Reintentar
        </button>
      </div>
    );
  }

  // Asegúrate de que 'data' no sea nulo antes de intentar acceder a sus propiedades
  // Esto es una salvaguarda, ya que isError debería haber capturado los fallos.
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[200px] bg-yellow-100 p-4 rounded-lg shadow">
        <p className="text-lg text-yellow-700">No se encontraron datos.</p>
      </div>
    );
  }

  // Muestra los datos del personaje una vez cargados
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200 max-w-md mx-auto my-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-4 text-center">
        Detalles del Personaje
      </h1>
      <div className="flex flex-col items-center">
        <img
          src={data.image}
          alt={data.name}
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-300 shadow-md"
          // Imagen de marcador de posición en caso de que la imagen real no se cargue
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/128x128/aabbcc/ffffff?text=No+Image"; }}
        />
        <p className="text-xl font-semibold text-gray-900 mb-2">{data.name}</p>
        <p className="text-gray-700"><span className="font-medium">Especie:</span> {data.species}</p>
        <p className="text-gray-700"><span className="font-medium">Estado:</span> {data.status}</p>
        <p className="text-gray-700"><span className="font-medium">Origen:</span> {data.origin.name}</p>
        <p className="text-gray-700"><span className="font-medium">Ubicación:</span> {data.location.name}</p>
      </div>
    </div>
  );
};

// Componente principal que envuelve CharacterDetailComponent con QueryClientProvider
// export default function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <CharacterDetailComponent />
//     </QueryClientProvider>

//     // sin QueryClientProvider no se puede utilizar o no se renderiza el componente
//   );
// }

export default CharacterDetailComponent;