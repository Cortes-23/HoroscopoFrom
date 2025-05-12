import React, { useState } from 'react';
import './App.css';
import { predicciones, getSignoByDate } from './data/horoscope';

function App() {
  const [fecha, setFecha] = useState('');
  const [prediccion, setPrediccion] = useState('');

  const consultarHoroscopo = () => {
    const signo = getSignoByDate(fecha);
    const prediccionesSigno = predicciones[signo] || [];
    const prediccionRandom = prediccionesSigno[Math.floor(Math.random() * prediccionesSigno.length)];
    setPrediccion(`${signo.toUpperCase()}: ${prediccionRandom}`);
  };

  return (
    <div className="container">
      <h1>Horóscopo Diario</h1>
      <div className="input-section">
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <button onClick={consultarHoroscopo}>Consultar</button>
      </div>
      {prediccion && <div className="mensaje">{prediccion}</div>}
    </div>
  );
}

export default App;
