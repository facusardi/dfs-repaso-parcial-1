const Controles = ({ onCambiarUnidad, onCambiarClima, reiniciar }) => {
    return (
        <div className='controles-clima'>
            <button onClick={onCambiarUnidad}>Cambiar Unidad</button>
            <button onClick={() => onCambiarClima('Soleado')}>Soleado</button>
            <button onClick={() => onCambiarClima('Nublado')}>Nublado</button>
            <button onClick= {() => reiniciar()}>Reiniciar</button>
        </div>
    )
}

export default Controles