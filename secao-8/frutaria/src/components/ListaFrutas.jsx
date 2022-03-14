import React from 'react';
import AdicionaFruta from './AdicionaFruta';
import Fruta from './Fruta'

const ListaFrutas = () => {

  const frutas = [
    { id:1, nome: 'Laranja', quantidade:2 },
    { id:2, nome: 'Abacate', quantidade:6 }

  ]

  return(
    <>
    <h1>Lista de Frutas</h1>

    <AdicionaFruta/>

    {frutas.map(fruta => (
      <Fruta key={fruta.id} fruta={fruta}/>
    ))}
    </>
  )

}

export default ListaFrutas;