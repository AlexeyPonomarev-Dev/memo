import { ADD_OPENED_CARD, DISABLED_CARDS } from "./actionTypes";
import { Action, State } from "./types";

const initialState: State = {
  openedCard: -1,
  disabledCards: false,
};

export const gameReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_OPENED_CARD:
      return { ...state, openedCard: action.payload };
    case DISABLED_CARDS:
      return { ...state, disabledCards: action.payload };
    default:
      return state;
  }
};
