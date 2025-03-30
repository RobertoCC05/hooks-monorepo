import { useState, useCallback, memo } from 'react';

// El componente hijo MEMOIZADO (sensible a props)
const Boton = memo(function Boton({ onClick, children }) {
  console.log('Renderizando Boton'); // Solo se imprime cuando cambia su prop onClick
  return <button onClick={onClick}>{children}</button>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  //  useCallback para memoizar función (evita recreación en cada render)
  const incrementar = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Dependencias vacías = misma función siempre

  return (
    <div>
      <p>Contador: {count}</p>
      <input 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Escribe algo..."
      />
      {/* El boton no se rerenderiza al cambiar inputValue (gracias a useCallback + memo) */}
      <Boton onClick={incrementar}>Incrementar</Boton>
    </div>
  );
}
