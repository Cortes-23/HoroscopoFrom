import React, { useState } from 'react';
import './App.css';

function App() {
  const [signo, setSigno] = useState('');
  const [mensaje, setMensaje] = useState('');

  const obtenerHoroscopo = () => {
    setMensaje(`Predicción para ${signo}: ¡Grandes cambios están por venir!`);
  };

  return (
    <div className="container">
      <h1>Horóscopo Diario</h1>
      <input
        type="text"
        value={signo}
        onChange={(e) => setSigno(e.target.value)}
        placeholder="Ingresa tu signo zodiacal"
      />
      <button onClick={obtenerHoroscopo}>Consultar</button>
      {mensaje && <div className="mensaje">{mensaje}</div>}
    </div>
  );
}

export default App;
