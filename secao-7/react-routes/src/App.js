import React from 'react';
import './App.css';

import Usuarios from './components/Usuarios/Usuarios'

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href='/' className="">Início</a></li>
            <li><a href='/usuarios'>Usuários Cadastrado</a></li>
            <li><a href='/adicionar'>Adicionar Usuário</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Usuarios />
      </main>
    </div>
  );
}

export default App;
