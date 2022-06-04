import { GET_EQUIPES, GET_EQUIPE } from "../action/actiontype";

const initState = { equipes: [], equipe: [] };

const equipeReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_EQUIPES:
      return {
        ...state,
        equipes: action.payload,
      };
    case GET_EQUIPE:
      return {
        ...state,
        equipe: action.payload,
      };
    default:
      return state;
  }
};
export default equipeReducer;
