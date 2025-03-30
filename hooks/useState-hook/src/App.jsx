import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // aqui se declara la variable que guarda el estado actual en este caso 0
  // y la funcion que podrá actualizarlo
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Ejemplo useState </h1>
      
      <div className="card">
        	{/* cuando se activa el evento onClick sobre el boton
            la funcion setCount, actualiza el estado aumentandolo en uno */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
