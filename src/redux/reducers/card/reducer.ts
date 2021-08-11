import { getGameData, shuffle } from "../../../utils";
import { SET_CARDS } from "./actionTypes";

const initialState = shuffle(getGameData("pawPatrol"));
console.log(initialState);

const cardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CARDS:
      return action.payload;
    default:
      return state;
  }
};

export { cardReducer };
