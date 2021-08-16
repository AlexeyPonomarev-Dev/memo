// import { imagesType } from "../../../utils/types";
// import { RESET_GAME, SET_CARDS } from "./actionTypes";
// import { CardDataType, CardType } from "./types";

// export const setCards = (payload: any) => {
//   return async (dispatch: any, getState: any) => {
//     let newPayload: CardDataType = [];
//     const { cards } = await getState();
//     newPayload = [...cards].map((card: CardType) => {
//       if (card.id === payload.cards[0] || card.id === payload?.cards[1]) {
//         card.isOpen = !payload.hide;
//       }
//       return card;
//     });

//     dispatch({
//       type: SET_CARDS,
//       payload: newPayload,
//     });
//   };
// };

// export const resetGame = (type: imagesType) => {
//   return {
//     type: RESET_GAME,
//     payload: type,
//   };
// };
