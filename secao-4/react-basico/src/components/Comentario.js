import React from 'react';
import './Comentario.css'

const Comentario = props => (
  <div className='Comentario'>
    <h3>{props.nome}</h3>
    <p className='font'>{props.email}</p>
    <p className='font'>{props.children}</p>
    <p className='font'>{props.data.toString()}</p>
  </div>
  );

export default Comentario;