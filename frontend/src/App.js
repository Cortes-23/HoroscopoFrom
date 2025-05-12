import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api')
      .then(response => setMessage(response.data.message));
  }, []);

  return (
    <div className="App">
      <h1>Horoscop App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
