
import {useState} from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <nav className="navbar">
      <a href="#hero">
        <img src={logo} alt="Le Gourmet Perú" className="logo" />
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Abrir menú"
      >
        {menuAbierto ? '✕' : '☰'}
      </button>

      <div className={`nav-links ${menuAbierto ? 'activo' : ''}`}>
        <a href="#hero" onClick={cerrarMenu}>Inicio</a>
        <a href="#carta" onClick={cerrarMenu}>Nuestra Carta</a>
        <a href="#nosotros" onClick={cerrarMenu}>Nosotros</a>
        <a href="#contacto" onClick={cerrarMenu}>Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;

