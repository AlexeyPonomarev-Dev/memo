import { SET_CARDS } from "./actionTypes";

export const setCards = (payload: any) => {
  return async (dispatch: any, getState: any) => {
    let newPayload;
    const { cards } = await getState();
    newPayload = [...cards].map(card => {
      if (card.id === payload.cards[0] || card.id === payload?.cards[1]) {
        card.isOpen = !payload.hide;
      }
      return card;
    });

    dispatch({
      type: SET_CARDS,
      payload: newPayload,
    });
  };
};
