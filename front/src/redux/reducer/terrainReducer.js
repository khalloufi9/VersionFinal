import { GET_TERRAINS, GET_TERRAIN } from "../action/actiontype";

const initState = { terrains: [], terrain: [] };

const terrainReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_TERRAINS:
      return {
        ...state,
        terrains: action.payload,
      };
    case GET_TERRAIN:
      return {
        ...state,
        terrain: action.payload,
      };
    default:
      return state;
  }
};
export default terrainReducer;
