import React from 'react';
import './App.css';
import ListaFrutas from './components/ListaFrutas';

function App() {
  document.title = 'Frutaria';

  return (
    <div className="container">
      <ListaFrutas />
    </div>
  );
}

export default App;
