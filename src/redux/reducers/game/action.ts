import { CARD_ANIMATION_TIME } from "../../../constants/time";
import { setCards } from "../card/actions";
import { ADD_OPENED_CARD, DISABLED_CARDS } from "./actionTypes";

export const addOpenedCard = (payload: any) => {
  return async (dispatch: any, getState: any) => {
    const {
      cards,
      game: { openedCard },
    } = await getState();
    let newPayload = -1;

    dispatch(setCards({ cards: [payload], hide: false }));

    if (openedCard > -1) {
      const firstCard = cards.find(card => card.id === openedCard);
      const secondCard = cards.find(card => card.id === payload);

      dispatch(disabledCards(true));

      if (firstCard.value === secondCard.value) {
        dispatch(setCards({ cards: [openedCard, payload], hide: false }));
        setTimeout(() => {
          dispatch(disabledCards(false));
        }, CARD_ANIMATION_TIME);
      } else {
        dispatch(setCards({ cards: [openedCard, payload], hide: true }));
        setTimeout(() => {
          dispatch(disabledCards(false));
        }, CARD_ANIMATION_TIME);
      }
    } else {
      newPayload = payload;
    }

    dispatch({
      type: ADD_OPENED_CARD,
      payload: newPayload,
    });
  };
};

const disabledCards = (payload: boolean) => {
  return {
    type: DISABLED_CARDS,
    payload,
  };
};
