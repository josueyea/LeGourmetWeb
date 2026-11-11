import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Logo" className="logo" />
      <div>
        <a href="#hero">Inicio</a>
        <a href="#carta">Nuestra Carta</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;
