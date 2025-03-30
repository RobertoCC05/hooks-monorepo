import './App.css'

import { useState, useMemo } from 'react';

export default function App() {
  const [users, setUsers] = useState(['Ana', 'Carlos', 'Elena', 'Beatriz', 'David']);
  const [filter, setFilter] = useState('');

  // useMemo: evita recalcular filteredUsers si [users, filter] no cambian
  const filteredUsers = useMemo(() => {
    console.log('Recalculando filtro...'); // verifica que solo se ejecuta cuando cambia el filtro
    return users.filter(user => 
      user.toLowerCase().includes(filter.toLowerCase())
    );
  }, [users, filter]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Lista filtrada con useMemo</h2>
      <input
        type="text"
        value={filter}
        //Actualiza cada vez que hay un cambio en el input
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filtrar nombres..."
      />
      <ul>
        
        {filteredUsers.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
