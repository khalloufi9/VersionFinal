import { GET_ARBITRES, GET_ARBITRE_BYID } from "../action/actiontype";

const initState = { arbitres: [], arbitre: [] };

const arbitreReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ARBITRES:
      return {
        ...state,
        arbitres: action.payload,
      };
    case GET_ARBITRE_BYID:
      return {
        ...state,
        arbitre: action.payload,
      };
    default:
      return state;
  }
};
export default arbitreReducer;
