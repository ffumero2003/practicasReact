import Home from "./pages/home"
import GestionContactos from "./pages/gestionContactos"
import DetalleContactoPage from "./pages/detalleContactoPage"
import { Outlet } from "react-router-dom"

function App() {
  

  return (
    <div >
      {/* <Home /> */}
      {/* <GestionContactos /> */}
      {/* <DetalleContactoPage /> */}
      <Outlet />
    </div>
  )
}

export default App
