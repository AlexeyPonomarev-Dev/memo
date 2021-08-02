import { ADD_COUPLE, TOGGLE_CARD } from "./actionTypes";

export const addCouple = (payload) => {
  return {
    type: ADD_COUPLE,
    payload,
  };
};

export const toggleCard = (payload) => {
  return {
    type: TOGGLE_CARD,
    payload,
  };
};
