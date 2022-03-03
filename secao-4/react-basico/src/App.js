import React from 'react';
import './App.css';

import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
        <h1>Olá mundo, meu primeiro projeto em React</h1>
        <Comentario nome="Gabriel" email="bielzin99@gmail.com" data={new Date(2020,3,3)}>
          Olá tudo bem?
        </Comentario>

        <Comentario nome="Luiza" email="luiza1222@gmail.com" data={new Date(2020,3,1)}>
          tudo bem sim? e vc léo?
        </Comentario>

        <Comentario nome="Leo" email="leo77@gmail.com" data={new Date(2020,2,23)}>
          tou ok!!
        </Comentario>
    </div>
  );
}

export default App;
