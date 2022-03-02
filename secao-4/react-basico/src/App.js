import React from 'react';
import './App.css';

import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
        <h1>Olá mundo, meu primeiro projeto em React</h1>
        <Comentario/>
        <Comentario/>
        <Comentario/>
    </div>
  );
}

export default App;
