import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Perfil from './components/Perfil';
import Detalle from './components/Detalle';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/Detalle" element={<Detalle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
