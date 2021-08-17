import { imagesType } from "../utils/types";
import {
  ADD_ONE_STEP,
  ADD_PROGRESS,
  GAME_STARTED,
  OPEN_CARD,
  RESET_GAME,
  SET_CARDS,
  SET_SHOW_MODAL,
} from "./reducers/game/actionTypes";
import { CardDataType, GameStore } from "./reducers/game/types";

export interface StoreType {
  game: GameStore;
}

export type AppAction =
  | { type: typeof OPEN_CARD; payload: number }
  | { type: typeof SET_CARDS; payload: CardDataType }
  | { type: typeof SET_SHOW_MODAL; payload: boolean }
  | { type: typeof RESET_GAME; payload: imagesType }
  | { type: typeof ADD_PROGRESS }
  | { type: typeof ADD_ONE_STEP }
  | { type: typeof GAME_STARTED };

export type ActionTypes =
  | typeof OPEN_CARD
  | typeof SET_CARDS
  | typeof SET_SHOW_MODAL
  | typeof RESET_GAME
  | typeof ADD_PROGRESS
  | typeof ADD_ONE_STEP
  | typeof GAME_STARTED;
