function Plato(props) {
    return (
        <div className="plato-card">
            <h3>{props.nombre}</h3>
            <p>{props.descripcion}</p>
            <p>Precio: S/{props.precio}</p>
            <img src={props.imagen} alt={props.nombre} />     
        </div>
    )
}

export default Plato;