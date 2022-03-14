import React from 'react';

const Frutas = ({fruta}) => {

  return(
    <div className='fruta'>
      <ul>
        <li>
          <strong>Fruta:</strong> {fruta.nome}
        </li>

        <li>
          <strong>Quantidade</strong> {fruta.quantidade}
        </li>
      </ul>
      <button onClick={() => alert(fruta.id)}>Remover</button>
    </div>
  )
}

export default Frutas;