import { ADD_COUPLE, RESET_COUPLE } from "./actionTypes";
import { CardDataType } from "./types";

const initialState: CardDataType = [
  { id: 0, value: 1, hasCouple: false, isOpen: false },
  { id: 1, value: 2, hasCouple: false, isOpen: false },
  { id: 2, value: 3, hasCouple: false, isOpen: false },
  { id: 3, value: 4, hasCouple: false, isOpen: false },
  { id: 4, value: 1, hasCouple: false, isOpen: false },
  { id: 5, value: 2, hasCouple: false, isOpen: false },
  { id: 6, value: 3, hasCouple: false, isOpen: false },
  { id: 7, value: 4, hasCouple: false, isOpen: false },
];

const cardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_COUPLE:
      return action.payload;
    case RESET_COUPLE:
      return initialState;
    default:
      return state;
  }
};

export { cardReducer };
