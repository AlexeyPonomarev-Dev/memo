import { ThunkDispatch } from "redux-thunk";
import { CARD_ANIMATION_TIME } from "../../../constants/time";
import { imagesType } from "../../../utils/types";
import { StoreType, AppAction } from "../../storeTypes";
import {
  RESET_GAME,
  SET_CARDS,
  OPEN_CARD,
  SET_SHOW_MODAL,
  ADD_PROGRESS,
  GAME_STARTED,
  ADD_ONE_STEP,
} from "./actionTypes";
import { CardDataType, CardType, SetCardsPayload } from "./types";

export const openCard = (currentCard: number) => {
  return async (
    dispatch: ThunkDispatch<StoreType, {}, AppAction>,
    getState: () => StoreType,
  ) => {
    const {
      game: { openedCard, cards },
    } = await getState();
    let newPayload = -1;

    dispatch(setCards({ cards: [currentCard], hide: false }));

    dispatch({
      type: GAME_STARTED,
    });

    if (openedCard > -1) {
      dispatch({
        type: ADD_ONE_STEP,
      });

      const firstCard = cards.find((card: CardType) => card.id === openedCard);
      const secondCard = cards.find(
        (card: CardType) => card.id === currentCard,
      );

      if (firstCard?.value === secondCard?.value) {
        dispatch(setCards({ cards: [openedCard, currentCard], hide: false }));
        dispatch({
          type: ADD_PROGRESS,
        });

        setTimeout(() => {
          const {
            game: { progress },
          } = getState();

          if (progress === cards.length / 2) {
            dispatch(setShowModal(true));
          }
        }, CARD_ANIMATION_TIME);
      } else {
        dispatch(setCards({ cards: [openedCard, currentCard], hide: true }));
      }
    } else {
      newPayload = currentCard;
    }

    dispatch({
      type: OPEN_CARD,
      payload: newPayload,
    });
  };
};

export const setCards = (payload: SetCardsPayload) => {
  return async (
    dispatch: ThunkDispatch<StoreType, {}, AppAction>,
    getState: () => StoreType,
  ) => {
    let newPayload: CardDataType = [];
    const {
      game: { cards },
    } = await getState();

    newPayload = [...cards].map((card: CardType) => {
      if (card.id === payload.cards[0] || card.id === payload?.cards[1]) {
        // eslint-disable-next-line no-param-reassign
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

export const resetGame = (type?: imagesType) => {
  return async (
    dispatch: ThunkDispatch<StoreType, {}, AppAction>,
    getState: () => StoreType,
  ) => {
    const {
      game: { currentImagesType },
    } = await getState();

    dispatch({
      type: RESET_GAME,
      payload: type ?? currentImagesType,
    });
  };
};

export const setShowModal = (payload: boolean) => {
  return async (dispatch: ThunkDispatch<StoreType, {}, AppAction>) => {
    dispatch({
      type: SET_SHOW_MODAL,
      payload,
    });
  };
};
