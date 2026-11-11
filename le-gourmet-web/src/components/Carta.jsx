import Plato from "./Plato";

const platos = [
  {
    id: 1,
    nombre: "Hamburguesa Clásica",
    descripcion:
      "Deliciosa hamburguesa con carne de res, queso, lechuga, tomate y salsa especial.",
    precio: 23,
    imagen: "images/hamburguesa.jpg",
  },
  {
    id: 2,
    nombre: "Tabla de Quesos y Fiambres",
    descripcion: "Selección de quesos artesanales y fiambres de alta calidad.",
    precio: 35,
    imagen: "images/tabla-quesos.jpg",
  },
];

function Carta() {
  return (
    <section id="carta">
      <h2>Nuestra Carta</h2>
      <p>Bienvenido a nuestra carta de platillos.</p>

      <div className="platos-container">
        {platos.map((plato) => (
          <Plato
            key={plato.id}
            nombre={plato.nombre}
            descripcion={plato.descripcion}
            precio={plato.precio}
            imagen={plato.imagen}
          />
        ))}
      </div>
    </section>
  );
}

export default Carta;
