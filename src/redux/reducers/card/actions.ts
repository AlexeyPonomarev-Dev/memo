import {
  HIDE_CURRENT_COUPLE,
  OPEN_CARD,
  RESET_OPEN_CARDS,
} from "./actionTypes";
import { CardDataType } from "./types";

export const openCard = (cardId: number) => {
  return {
    type: OPEN_CARD,
    cardId,
  };
};

export const hideCouple = (cards: CardDataType, openCards: number[]) => {
  const firstCard = cards.find(card => card.id === openCards[0]);
  const secondCard = cards.find(card => card.id === openCards[1]);
  if (firstCard) firstCard.isOpen = false;
  if (secondCard) secondCard.isOpen = false;

  return {
    type: HIDE_CURRENT_COUPLE,
    payload: {
      data: cards,
      openCards: [],
    },
  };
};

export const resetOpenCards = () => {
  return {
    type: RESET_OPEN_CARDS,
  };
};
