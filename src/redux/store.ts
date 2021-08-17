import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { gameReducer } from "./reducers/game/reducer";

const rootReducer = combineReducers({
  game: gameReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
