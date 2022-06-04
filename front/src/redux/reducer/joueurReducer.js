import { GET_JOUEURS, GET_JOUEUR_BYID } from "../action/actiontype";

const initState = { joueurs: [], joueur: [] };

const joueurReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_JOUEURS:
      return {
        ...state,
        joueurs: action.payload,
      };
    case GET_JOUEUR_BYID:
      return {
        ...state,
        joueur: action.payload,
      };
    default:
      return state;
  }
};
export default joueurReducer;
