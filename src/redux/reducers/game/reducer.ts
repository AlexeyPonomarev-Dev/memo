import { getGameData, shuffle } from "../../../utils";
import { imagesType } from "../../../utils/types";
import {
  OPEN_CARD,
  RESET_GAME,
  SET_CARDS,
  SET_SHOW_MODAL,
  ADD_PROGRESS,
} from "./actionTypes";
import { Action, GameStore } from "./types";

const initialState: GameStore = {
  cards: shuffle(getGameData("Simpsons")),
  openedCard: -1,
  disabledCards: false,
  showModal: false,
  progress: 0,
  currentImagesType: "Simpsons",
};

export const gameReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case OPEN_CARD:
      return { ...state, openedCard: action.payload };
    case RESET_GAME:
      return {
        ...initialState,
        cards: shuffle(getGameData(action.payload as imagesType)),
      };
    case SET_CARDS:
      return { ...state, cards: action.payload };
    case SET_SHOW_MODAL:
      return { ...state, showModal: action.payload };
    case ADD_PROGRESS:
      return { ...state, progress: state.progress + 1 };
    default:
      return state;
  }
};
