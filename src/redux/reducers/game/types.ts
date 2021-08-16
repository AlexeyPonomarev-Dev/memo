import { imagesType } from "../../../utils/types";

export type CardType = {
  id: number;
  value: string;
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
  disabledCards: boolean;
  showModal: boolean;
  progress: number;
  currentImagesType: imagesType;
};

export type Action = {
  type: string;
  payload: number | imagesType | boolean;
};

export type SetCardsPayload = {
  cards: number[];
  hide: boolean;
};
