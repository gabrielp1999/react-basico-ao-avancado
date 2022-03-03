import React from 'react';
import './Comentario.css'

const Comentario = props => (
  <div className='Comentario'>
    <h3>{props.nome}</h3>
    <p>{props.email}</p>
    <p>{props.children}</p>
    <p>{props.data.toString()}</p>
  </div>
  );

export default Comentario;