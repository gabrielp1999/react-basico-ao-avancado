import { actions } from "../actions/frutas.actions";
import { actionsType } from "../constants/frutas";

const INITIAL_STATE = {
  frutas: [
    { id:1, nome: 'Uva', quantidade: 33 },
    { id:2, nome: 'Goiaba', quantidade: 13 }
  ]
}

const reducers = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionsType.ADICIONAR_FRUTA:
      return { frutas: [...state.frutas, { ...action.payload }]}
    case actionsType.REMOVER_FRUTA:
      return { frutas: state.frutas.filter(x => x.id !==  action.payload.id) }
    default:
      return state
  }
}