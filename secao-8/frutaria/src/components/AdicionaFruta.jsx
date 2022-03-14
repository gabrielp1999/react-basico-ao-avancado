import React, { useState } from 'react';

const AdicionaFruta = () => {

  const [nome, setNome] = useState();
  const [quantidade, setQuantidade] = useState(0);

  const adicionarFruta = event => {
    event.preventDefault();
    alert('oie')

    const fruta = {
      id: new Date(),
      nome,
      quantidade
    };

    console.log('Adicionar Fruta', fruta)
  }

return(
  <form onSubmit={adicionarFruta}>
    <input
     type="text"
     name={nome}
     placeholder='Fruta'
     required
     onChange={e =>setNome(e.target.value)}
    />

  <input
     type="number"
     name={quantidade}
     placeholder='Quantidade'
     required
     onChange={e =>setQuantidade(e.target.value)}
    />

    <button type='submit'>Adicionar</button>
  </form>
)
}

export default AdicionaFruta;