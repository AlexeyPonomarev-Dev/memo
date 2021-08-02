import { combineReducers, createStore } from "redux";
import { cardReducer } from "./reducers/card/reducer";

const rootReducer = combineReducers({
  cards: cardReducer,
});

export const store = createStore(rootReducer);
