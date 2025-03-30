import './App.css'

import { createContext, useContext, useState} from 'react';

// crear contexto (valor por defecto 'light')
const TemaContext = createContext('light');

// El componente que PROVEE el contexto (padre)
function App() {
  const [tema, setTema] = useState('light'); // use state para modificar el estado del contexto
  return (
    // Acá se modifica el valor actual de "tema" para todo el contexto
    <TemaContext.Provider value={tema}>
      <div style={{ background: tema === 'light' ? '#fff' : '#333', padding: '20px' }}>
        <MostrarTema />
        <button onClick={() => setTema(tema === 'light' ? 'dark' : 'light')}>
          Cambiar tema
        </button>
      </div>
    </TemaContext.Provider>
  );
}

// el componente que consume el contexto (hijo)
function MostrarTema() {
  const tema = useContext(TemaContext); // Lee el valor del contexto
  return <p style={{color: 'grey'}}>El tema actual es: {tema}</p>;
}

export default App
