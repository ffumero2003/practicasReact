import { useState, useEffect } from 'react';

// Async function to fetch character data (renamed from fetchWeather for clarity)
const fetchCharacterData = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character/105');
  if (!response.ok) {
    throw new Error('Failed to fetch character data');
  }
  return response.json();
};

const TestComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const characterData = await fetchCharacterData();
        setData(characterData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []); // El array de dependencias vacío asegura que se ejecute solo una vez al montar el componente

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px] bg-gray-50 p-4 rounded-lg shadow">
        <p className="text-lg text-gray-700">Cargando datos del personaje...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[200px] bg-red-100 p-4 rounded-lg shadow">
        <p className="text-lg text-red-700">Error: {error}</p>
      </div>
    );
  }

  // Asegúrate de que 'data' no sea nulo antes de intentar acceder a sus propiedades
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[200px] bg-yellow-100 p-4 rounded-lg shadow">
        <p className="text-lg text-yellow-700">No se encontraron datos.</p>
      </div>
    );
  }

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
          // Placeholder image in case the actual image fails to load
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

export default TestComponent;