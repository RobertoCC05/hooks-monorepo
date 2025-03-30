import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // esto es lo que se ejecuta cada vez que el elemento se actualiza
    if (contador === 3) {
      alert("¡El contador llegó a 3!");
    }
  }, [contador]); //en este array se colocan los elementos que va a 'observar'
      // Se ejecuta cada vez que "contador" cambia

  const incrementar = () => {
    setContador(contador + 1);
  };

  const reiniciar = () => {
    setContador(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar}>Sumar +1</button>
      <button onClick={reiniciar} style={{ marginLeft: '10px' }}>Reiniciar</button>
    </div>
  );
}

export default App
