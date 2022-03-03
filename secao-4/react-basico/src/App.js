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
    ],
    novoComentario: {
      nome:"",
      email:"",
      mensagem:""
    }
  }

  adicionandoComentario = e => {
    e.preventDefault();

    // const novoComentario = {
    //   nome: 'kaun',
    //   email: 'kaun@gmai.com',
    //   data: new Date(),
    //   mensagem: "iae turma!!!"
    // }
    const novoComentario = {...this.state.novoComentario, data: new Date() }

    this.setState({
      comentarios:[...this.state.comentarios, novoComentario],
      novoComentario: { nome:'', email:'', mensagem:''}
    });
  }

  digitacao = e =>{
    const { name, value } = e.target;
    this.setState({ novoComentario: {...this.state.novoComentario, [name]: value } });
  }



  render(){
    return (
      <div className="App">
          <h3>Olá mundo, meu primeiro projeto em React</h3>

      {this.state.comentarios.map((comentario, indice) => (
          <Comentario
          key={indice}
           nome={comentario.nome}
            email={comentario.email}
            data={comentario.data}>
            {comentario.mensagem}
          </Comentario>
      ))}
        <form method="post" onSubmit={this.adicionandoComentario}>
          <h3>Adicionar comentario</h3>

          <div>
            <input
             type="text"
              name="nome"
              onChange={this.digitacao}
              value={this.state.novoComentario.nome}
              placeholder="Digite seu nome"/>
          </div>

          <div>
            <input type="email"
             name="email"
             onChange={this.digitacao}
             value={this.state.novoComentario.email}
              placeholder="Digite seu email"/>
          </div>

          <div>
            <textarea name="mensagem"
             onChange={this.digitacao}
            value={this.state.novoComentario.mensagem}
             rows="4"/>
          </div>
          <button type="submit">Adicionar Comentario</button>
        </form>
      </div>
      );
    }    

}

export default App;
