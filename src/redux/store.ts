import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { cardReducer } from "./reducers/card/reducer";
import { gameReducer } from "./reducers/game/reducer";

const rootReducer = combineReducers({
  cards: cardReducer,
  game: gameReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
