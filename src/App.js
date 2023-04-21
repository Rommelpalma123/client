import "./App.css";
import { Routes, Route } from "react-router-dom";
import Barra from "./components/Barra";
import Portafolio from "./components/Portafolio";
import Contacto from "./components/Contacto";
import About from "./components/About";

function App() {
  return (
    <div>
      <Barra />
      <Routes>
        <Route path="/client" element={<Portafolio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </div>
  );
}
export default App;
