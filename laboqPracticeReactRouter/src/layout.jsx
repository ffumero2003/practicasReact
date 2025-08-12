import { Outlet } from "react-router-dom"
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";

function Layout(){
  return (
    <div className="min-h-screen w-screen">  
     
        <NavBar />
        <Outlet />
        <Footer />
      
    </div>
  )
}

export default Layout;