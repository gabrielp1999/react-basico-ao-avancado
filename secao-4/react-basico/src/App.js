import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';

import Comentario from './components/Comentario';

class App extends Component{

  state = {
    comentarios: [
      {
        nome: 'Gabriel',
        email: 'bielzinzn1992@gmai.com',
        data: new Date(2020,3,3),
        mensagem: "Olá tudo bem?"
      },
      {
        nome: 'Luiza',
        email: 'Luiza@gmai.com',
        data: new Date(2020,4,2),
        mensagem: "tudo bem sim? e vc biel?"
      },
    ]
  }

  adicionandoComentario = ()=> {
    const novoComentario = {
      nome: 'kaun',
      email: 'kaun@gmai.com',
      data: new Date(),
      mensagem: "iae turma!!!"
    }

    // let lista = this.state.comentarios;
    // lista.push(novoComentario);
    // this.setState({ comentarios: lista });

    this.setState({
      comentarios:[...this.state.comentarios, novoComentario]
    });
  }

  render(){
    return (
      <div className="App">
          <h1>Olá mundo, meu primeiro projeto em React</h1>

      {this.state.comentarios.map((comentario, indice) => (
          <Comentario
          key={indice}
           nome={comentario.nome}
            email={comentario.email}
            data={comentario.data}>
            {comentario.mensagem}
          </Comentario>
      ))}
      <button onClick={this.adicionandoComentario}>Adicionar um comentario</button>
      </div>
      );
    }    

}

export default App;
