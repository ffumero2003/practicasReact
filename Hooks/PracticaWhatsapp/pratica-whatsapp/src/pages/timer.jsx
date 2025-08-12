import { useState, useEffect } from "react";

function Timer(){
  const [segundos, setSegundos] = useState(0);
  const [run, setRun] = useState(false);

  useEffect(() => {
    let interval;

    if (run) {
      interval = setInterval(() => {
        setSegundos(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [run]);

  const minutos = String(Math.floor(segundos / 60)).padStart(2, "0");
  const seg = String(segundos % 60).padStart(2, "0");

  const handleStart = () => setRun(true);          // iniciar
  const handlePause = () => setRun(false);         // pausar
  const handleResume = () => setRun(true);         // reanudar = iniciar
  const handleReset = () => {                      // reiniciar
    setRun(false);
    setSegundos(0);
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-center w-screen h-screen">
      <h1 className="text-3xl">{minutos}:{seg}</h1>
      <div className="flex gap-3">
        <button className="p-3 rounded-lg shadow bg-blue-400 text-white hover:bg-blue-600"
                onClick={handleStart}
                disabled={run}>
          Iniciar
        </button>
        <button className="p-3 rounded-lg shadow bg-yellow-400 text-white hover:bg-yellow-600"
                onClick={handlePause}
                disabled={!run}>
          Pausar
        </button>
        <button className="p-3 rounded-lg shadow bg-green-400 text-white hover:bg-green-600"
                onClick={handleResume}
                disabled={run}>
          Reanudar
        </button>
        <button className="p-3 rounded-lg shadow bg-red-400 text-white hover:bg-red-600"
                onClick={handleReset}>
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default Timer;
