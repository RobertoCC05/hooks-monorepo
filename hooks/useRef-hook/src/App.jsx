import './App.css'
import { useRef } from 'react';

function App() {
//Crea una referencia usando el Hook useRef.
// null es el valor inicial de la referencia (inputRef.current será null hasta que se asocie al elemento del DOM).
// esto para acceder directamente al elemento <input> sin manipular el DOM manualmente.
  const inputRef = useRef(null);

  return (
    <div>
      {/* Se hace refenrencia a un elemento del DOM */}
      <input ref={inputRef} type="text" />
      {/* el evento click pone el foco de atencion al elemento actual al que apunta el useRef
      en este caso el input se pone disponible para empezar a escribir*/}
      <button onClick={() => inputRef.current.focus()}>Enfocar</button>
    </div>
  );  
}

export default App
