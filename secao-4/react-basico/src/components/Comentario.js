import React from 'react';
import { formatRelative } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import './Comentario.css'
import imagemUsuario from'./user.png';

const Comentario = props => {
  const estilo = {
    color: 'red',
    padding:'1px',
    fontSize:'16px'
  }

  return(
    <div className='Comentario'>
    <img className='imagem' src={imagemUsuario}/>

    <h3 style={estilo}>{props.nome}</h3>
    <p className='font'>{props.email}</p>
    <p className='font'>{props.children}</p>
    <p className='font'>{formatRelative(props.data, new Date(), { locale:ptBR })}</p>
    <button onClick={props.onRemove}>&times;</button>
  </div>
  )};

export default Comentario;