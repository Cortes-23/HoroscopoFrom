import React, { useState } from 'react';
import './App.css';

function App() {
  const [signo, setSigno] = useState('');
  const [prediccion, setPrediccion] = useState('');

  const consultarHoroscopo = () => {
    setPrediccion(`Tu horóscopo para ${signo}: Hoy es un gran día para nuevos comienzos.`);
  };

  return (
    <div className="container">
      <h1>Horóscopo Diario</h1>
      <div className="input-section">
        <input
          type="text"
          value={signo}
          onChange={(e) => setSigno(e.target.value)}
          placeholder="Ingresa tu signo zodiacal"
        />
        <button onClick={consultarHoroscopo}>Consultar</button>
      </div>
      {prediccion && <div className="mensaje">{prediccion}</div>}
    </div>
  );
}

export default App;
