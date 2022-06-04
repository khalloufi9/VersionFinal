import { GET_MATCHES, GET_MATCH_BYID } from "../action/actiontype";

const initState = { matches: [], match: [] };

const matchReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_MATCHES:
      return {
        ...state,
        matches: action.payload,
      };
    case GET_MATCH_BYID:
      return {
        ...state,
        match: action.payload,
      };
    default:
      return state;
  }
};
export default matchReducer;