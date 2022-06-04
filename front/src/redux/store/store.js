import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
// import UserReducer from "../reducer/userReducer";
import EquipeReducer from "../reducer/equipeReducer";
import joueurReducer from "../reducer/joueurReducer";
import terrainReducer from "../reducer/terrainReducer";
import arbitreReducer from "../reducer/arbitreReducer";
import matchReducer from "../reducer/matchReducer"
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  // user: UserReducer,
  equipe: EquipeReducer,
  joueur: joueurReducer,
  terrain: terrainReducer,
  arbitre: arbitreReducer,
  match: matchReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;
