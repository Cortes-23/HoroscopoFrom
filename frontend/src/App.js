import React, { useState } from 'react';
import './App.css';
import HoroscopeResult from './components/HoroscopeResult';
import { signosData, validarFecha, obtenerSigno } from './data/predicciones';

function App() {
  const [fecha, setFecha] = useState('');
  const [resultado, setResultado] = useState(null);
  const [consultaHabilitada, setConsultaHabilitada] = useState(true);

  const handleFechaChange = (e) => {
    const value = e.target.value;
    const formattedDate = value.split('-').reverse().join('-');
    setFecha(formattedDate);
  };

  const consultarHoroscopo = () => {
    if (!validarFecha(fecha)) return;
    
    setConsultaHabilitada(false);
    const signo = obtenerSigno(fecha);
    const { emoji, predicciones } = signosData[signo];
    const prediccionAleatoria = predicciones[Math.floor(Math.random() * predicciones.length)];
    
    setResultado({ signo, prediccion: prediccionAleatoria, emoji });
  };

  const handleTimeout = () => {
    setResultado(null);
    setConsultaHabilitada(true);
  };

  return (
    <div className="container">
      <h1>Tu Horóscopo Personal</h1>
      <div className="input-section">
        <input
          type="date"
          onChange={handleFechaChange}
          required
        />
        <button 
          onClick={consultarHoroscopo}
          disabled={!consultaHabilitada || !fecha}
        >
          Consultar
        </button>
      </div>
      {resultado && (
        <HoroscopeResult
          {...resultado}
          onTimeout={handleTimeout}
        />
      )}
    </div>
  );
}

export default App;
