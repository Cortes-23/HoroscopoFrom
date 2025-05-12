import React, { useEffect, useState } from 'react';

const HoroscopeResult = ({ prediccion, signo, emoji, onTimeout }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onTimeout, 1000);
    }, 15000);

    return () => clearTimeout(timer);
  }, [onTimeout]);

  return (
    <div className={`mensaje ${fadeOut ? 'fade-out' : ''}`}>
      <h2>{signo} {emoji}</h2>
      <p>{prediccion}</p>
    </div>
  );
};

export default HoroscopeResult;
