import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/navBar/navBar"
import Home from "./pages/home"
import About from './pages/about';
import Footer from "./components/footer/footer"
import Contact from './pages/contact';
import Blog from './pages/blog';

function App() {
 

  return (
    <div className="min-h-screen w-screen">  
     
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
      
    </div>
  )
}

export default App
