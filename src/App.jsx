{/*Tarea 1: Arreglar el botón de cambiar unidad.
Tarea 2: Arreglar el display para que muestre correctamente el estado del tiempo.
Tarea 3: Arreglar el icono del estado del tiempo.
Tarea 4: Agregar un botón para reiniciar al estado inicial: 'Celsius' y 'Soleado'. */}


import { useState } from 'react'
import './App.css'
import Controles from './components/Controles';
import Display from './components/Display';

function App() {
  const [unidad, setUnidad] = useState('Celsius');
  const [clima, setClima] = useState('Soleado')

  const cambiarUnidad = () => {
    setUnidad('Fahrenheit')
    if (unidad=='Fahrenheit') setUnidad('Celsius')
  }  
  const cambiarClima = (estado) => {
    setClima(estado)
  }
  const reiniciar = () =>{
    setUnidad('Celsius')
    setClima('Soleado')
  }
  return (
    <div className="container">
      <h1>Estado del tiempo</h1>
      <Controles onCambiarUnidad={cambiarUnidad} onCambiarClima={cambiarClima}  reiniciar={reiniciar}/>
      <Display unidad={unidad} clima={clima} />
    </div>
  )
}

export default App
