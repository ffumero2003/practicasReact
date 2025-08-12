import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import GestionContactos from "./pages/gestionContactos";
import DetalleContactoPage from "./pages/detalleContactoPage";
import CrearContacto from "./pages/crearContacto";
import CrearNota from "./pages/crearNota";
import NuevaLlamada from "./pages/nuevaLlamada";
import RegistrarEmail from "./pages/registrarEmail";
import NotFound from "./components/notFound"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Home />,},
      {path: "/crearContacto", element: <CrearContacto />},
      {path: "/crearNota", element: <CrearNota />},
      {path: "/nuevaLlamada", element: <NuevaLlamada />},
      {path: "/registrarEmail", element: <RegistrarEmail />},
      {path: "/gestion", element: <GestionContactos />},
      {path: "/detalle/:id", element: <DetalleContactoPage />},
      {path: "*", element: <NotFound />}
    ]
  }
])

export default router