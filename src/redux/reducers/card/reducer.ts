import {
  HIDE_CURRENT_COUPLE,
  OPEN_CARD,
  RESET_OPEN_CARDS,
} from "./actionTypes";
import { CardDataType } from "./types";

const cards: CardDataType = [
  { id: 0, value: 1, hasCouple: false, isOpen: false },
  { id: 1, value: 2, hasCouple: false, isOpen: false },
  { id: 2, value: 3, hasCouple: false, isOpen: false },
  { id: 3, value: 4, hasCouple: false, isOpen: false },
  { id: 4, value: 1, hasCouple: false, isOpen: false },
  { id: 5, value: 2, hasCouple: false, isOpen: false },
  { id: 6, value: 3, hasCouple: false, isOpen: false },
  { id: 7, value: 4, hasCouple: false, isOpen: false },
];

const initialState = {
  openCards: [],
  data: cards,
};

const cardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case OPEN_CARD:
      return {
        ...state,
        openCards: [...state.openCards, action.cardId],
      };
    case HIDE_CURRENT_COUPLE:
      return action.payload;
    case RESET_OPEN_CARDS:
      return {
        ...state,
        openCards: [],
      };
    default:
      return state;
  }
};

export { cardReducer };
