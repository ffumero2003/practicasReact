import React, { useState, useEffect } from 'react';

// --- Ejercicio 1: Formulario Dinámico con Validación (useState) ---
const DynamicForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: [{ id: 1, name: '' }],
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSkillChange = (id, value) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.map(skill =>
        skill.id === id ? { ...skill, name: value } : skill
      ),
    }));
    // Clear skill error if typing
    if (errors[`skill-${id}`]) {
      setErrors(prev => ({ ...prev, [`skill-${id}`]: '' }));
    }
  };

  const addSkill = () => {
    setFormData(prev => ({
      ...prev,
      skills: [...prev.skills, { id: prev.skills.length + 1, name: '' }],
    }));
  };

  const removeSkill = (id) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id),
    }));
    // Remove error associated with the removed skill
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[`skill-${id}`];
      return newErrors;
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido.';
    }
    formData.skills.forEach((skill, index) => {
      if (!skill.name.trim()) {
        newErrors[`skill-${skill.id}`] = `La habilidad ${index + 1} es requerida.`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      console.log('Formulario enviado:', formData);
      // Aquí normalmente enviarías los datos a un servidor
    } else {
      setIsSubmitted(false);
      console.log('Errores en el formulario:', errors);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-200">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
        Ejercicio 1: Formulario Dinámico con Validación (useState)
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Habilidades:
          </label>
          {formData.skills.map((skill, index) => (
            <div key={skill.id} className="flex items-center space-x-2">
              <input
                type="text"
                value={skill.name}
                onChange={(e) => handleSkillChange(skill.id, e.target.value)}
                placeholder={`Habilidad ${index + 1}`}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors[`skill-${skill.id}`] ? 'border-red-500' : ''}`}
              />
              {formData.skills.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSkill(skill.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-lg text-sm"
                >
                  X
                </button>
              )}
              {errors[`skill-${skill.id}`] && <p className="text-red-500 text-xs italic mt-1">{errors[`skill-${skill.id}`]}</p>}
            </div>
          ))}
          <button
            type="button"
            onClick={addSkill}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            Añadir Habilidad
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
        >
          Enviar Formulario
        </button>
      </form>

      {isSubmitted && Object.keys(errors).length === 0 && (
        <div className="mt-6 p-4 bg-green-100 rounded-lg text-green-800">
          <h3 className="font-semibold">¡Formulario enviado con éxito!</h3>
          <pre className="text-sm overflow-auto">{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

// --- Ejercicio 2: Carrito de Compras Interactivo (useState) ---
const ShoppingCart = () => {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Mouse Inalámbrico', price: 25 },
    { id: 3, name: 'Teclado Mecánico', price: 75 },
    { id: 4, name: 'Monitor 27"', price: 300 },
  ]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productToAdd) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productToAdd.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems(prevItems => {
      if (newQuantity <= 0) {
        return prevItems.filter(item => item.id !== id);
      }
      return prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        Ejercicio 2: Carrito de Compras Interactivo (useState)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lista de Productos */}
        <div>
          <h3 className="text-xl font-medium text-gray-800 mb-3">Productos Disponibles</h3>
          <ul className="space-y-2">
            {products.map(product => (
              <li key={product.id} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg shadow-sm">
                <span>{product.name} - ${product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded-lg text-sm"
                >
                  Añadir
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Carrito */}
        <div>
          <h3 className="text-xl font-medium text-gray-800 mb-3">Tu Carrito</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-600 italic">El carrito está vacío.</p>
          ) : (
            <ul className="space-y-2">
              {cartItems.map(item => (
                <li key={item.id} className="flex justify-between items-center p-2 bg-blue-50 rounded-lg shadow-sm">
                  <span>{item.name} (${item.price}) x {item.quantity}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-0.5 px-2 rounded-lg text-sm"
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-0.5 px-2 rounded-lg text-sm"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-0.5 px-2 rounded-lg text-sm"
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 p-3 bg-blue-100 rounded-lg text-blue-800 font-bold text-lg flex justify-between">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Ejercicio 3: Búsqueda en Vivo con Debouncing (useState y useEffect) ---
const LiveSearchWithDebounce = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Efecto para el debouncing del término de búsqueda
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // Retraso de 500ms

    // Función de limpieza: se ejecuta si searchTerm cambia o el componente se desmonta
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]); // Se ejecuta cada vez que searchTerm cambia

  // Efecto para realizar la búsqueda cuando el término debounced cambia
  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);
      // Simula una llamada a la API
      const fetchResults = async () => {
        // Simula un retraso de la API
        await new Promise(resolve => setTimeout(resolve, 800));
        const dummyResults = [
          'Apple', 'Banana', 'Orange', 'Grape', 'Strawberry',
          'Blueberry', 'Raspberry', 'Pineapple', 'Mango', 'Cherry',
          'Kiwi', 'Lemon', 'Lime', 'Peach', 'Pear'
        ];
        const filteredResults = dummyResults.filter(item =>
          item.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
        setLoading(false);
      };
      fetchResults();
    } else {
      setSearchResults([]);
      setLoading(false);
    }
  }, [debouncedSearchTerm]); // Se ejecuta cada vez que debouncedSearchTerm cambia

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-200">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">
        Ejercicio 3: Búsqueda en Vivo con Debouncing (useState y useEffect)
      </h2>
      <input
        type="text"
        placeholder="Escribe para buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      {loading && <p className="text-purple-600">Cargando resultados...</p>}
      {!loading && searchResults.length === 0 && searchTerm && debouncedSearchTerm && (
        <p className="text-gray-600">No se encontraron resultados.</p>
      )}
      {!loading && searchResults.length > 0 && (
        <ul className="list-disc list-inside space-y-1 max-h-48 overflow-y-auto">
          {searchResults.map((result, index) => (
            <li key={index} className="text-gray-800">{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// --- Ejercicio 4: Temporizador de Cuenta Regresiva (useState y useEffect) ---
const CountdownTimer = () => {
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [initialTime, setInitialTime] = useState(0); // Para el reset

  // Efecto para el temporizador
  useEffect(() => {
    let intervalId;
    if (isRunning && timeInSeconds > 0) {
      intervalId = setInterval(() => {
        setTimeInSeconds(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeInSeconds === 0 && isRunning) {
      setIsRunning(false); // Detener el temporizador cuando llega a 0
    }

    // Función de limpieza
    return () => clearInterval(intervalId);
  }, [timeInSeconds, isRunning]); // Se ejecuta cuando el tiempo o el estado de ejecución cambian

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    if (timeInSeconds > 0) {
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleResume = () => {
    if (timeInSeconds > 0) {
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeInSeconds(initialTime); // Volver al tiempo inicial
  };

  const handleTimeInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setTimeInSeconds(value);
      setInitialTime(value); // Guardar el tiempo inicial para el reset
      setIsRunning(false); // Pausar si se cambia el tiempo
    } else if (e.target.value === '') {
      setTimeInSeconds(0);
      setInitialTime(0);
      setIsRunning(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-200 text-center">
      <h2 className="text-2xl font-semibold text-orange-700 mb-4">
        Ejercicio 4: Temporizador de Cuenta Regresiva (useState y useEffect)
      </h2>
      <div className="mb-4">
        <label htmlFor="timer-input" className="block text-gray-700 text-sm font-bold mb-2">
          Establecer tiempo (segundos):
        </label>
        <input
          type="number"
          id="timer-input"
          value={initialTime} // Mostrar el tiempo inicial para edición
          onChange={handleTimeInputChange}
          min="0"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
        />
      </div>
      <div className="text-6xl font-bold text-gray-900 mb-6">
        {formatTime(timeInSeconds)}
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleStart}
          disabled={isRunning || timeInSeconds === 0}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Iniciar
        </button>
        <button
          onClick={handlePause}
          disabled={!isRunning || timeInSeconds === 0}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Pausar
        </button>
        <button
          onClick={handleResume}
          disabled={isRunning || timeInSeconds === 0 || timeInSeconds === initialTime}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Reanudar
        </button>
        <button
          onClick={handleReset}
          disabled={timeInSeconds === initialTime && !isRunning}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};


// --- Componente Principal de la Aplicación ---
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans flex flex-col items-center space-y-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Ejercicios de React Hooks
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        <DynamicForm />
        <ShoppingCart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        <LiveSearchWithDebounce />
        <CountdownTimer />
      </div>

      <div className="mt-12 p-6 bg-blue-100 rounded-xl shadow-lg max-w-3xl text-center">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">
          ¡Sigue practicando!
        </h3>
        <p className="text-gray-700">
          Estos ejercicios te ayudarán a entender mejor cómo <code className="font-mono">useState</code>
          y <code className="font-mono">useEffect</code> trabajan juntos para crear componentes interactivos y eficientes.
          Intenta modificarlos, añadir nuevas funcionalidades o crear tus propios desafíos.
        </p>
      </div>
    </div>
  );
}
