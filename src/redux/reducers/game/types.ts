export type Card = {
  id: number;
  value: string;
  isOpen: boolean;
  hasCouple: boolean;
};

export type State = {
  openedCard: number;
  disabledCards: boolean;
};

export type Action = {
  type: string;
  payload: Card;
};
