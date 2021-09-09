import { ImageRequireSource } from "react-native";
import { imagesType } from "../../../utils/types";

export type CardType = {
  id: number;
  value: ImageRequireSource;
  isOpen: boolean;
};

export type CardDataType = CardType[];

export type Card = {
  id: number;
  value: string;
  isOpen: boolean;
  hasCouple: boolean;
};

export type GameStore = {
  cards: CardDataType;
  openedCard: number;
  showModal: boolean;
  showResultModal: boolean;
  progress: number;
  totalSteps: number;
  currentImagesType: imagesType;
  gameStarted: boolean;
  bestResult: ResultType;
};

export type SetCardsPayload = {
  cards: number[];
  hide: boolean;
};

export type ResultType = {
  name: string;
  result: number;
  date: Date | string;
};
