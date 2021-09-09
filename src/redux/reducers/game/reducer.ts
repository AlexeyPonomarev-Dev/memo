import { getGameData, shuffle } from "../../../utils";
import { AppAction } from "../../storeTypes";
import {
  OPEN_CARD,
  RESET_GAME,
  SET_CARDS,
  SET_SHOW_MODAL,
  SET_SHOW_RESULT_MODAL,
  ADD_PROGRESS,
  GAME_STARTED,
  ADD_ONE_STEP,
  SET_BEST_RESULT,
} from "./actionTypes";
import { GameStore } from "./types";

const initialState: GameStore = {
  cards: shuffle(getGameData("Simpsons")),
  openedCard: -1,
  showModal: false,
  showResultModal: false,
  progress: 0,
  totalSteps: 0,
  currentImagesType: "Simpsons",
  gameStarted: false,
  bestResult: {
    name: "",
    result: 0,
    date: "",
  },
};

export const gameReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case OPEN_CARD:
      return { ...state, openedCard: action.payload };
    case RESET_GAME:
      return {
        ...initialState,
        bestResult: state.bestResult,
        currentImagesType: action.payload,
        cards: shuffle(getGameData(action.payload)),
      };
    case SET_CARDS:
      return { ...state, cards: action.payload };
    case SET_SHOW_MODAL:
      return { ...state, showModal: action.payload };
    case SET_SHOW_RESULT_MODAL:
      return { ...state, showResultModal: action.payload };
    case ADD_PROGRESS:
      return { ...state, progress: state.progress + 1 };
    case GAME_STARTED:
      return { ...state, gameStarted: true };
    case ADD_ONE_STEP:
      return { ...state, totalSteps: state.totalSteps + 1 };
    case SET_BEST_RESULT:
      return { ...state, bestResult: action.data };
    default:
      return state;
  }
};
