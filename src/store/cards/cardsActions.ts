import { Dispatch } from "redux";
import { CardsAction, Card, CardsActionTypes } from "./cardsActionTypes";

export const addCard = (card: Card) => {
  return (dispatch: Dispatch<CardsAction>) => {
    dispatch({
      type: CardsActionTypes.ADD_CARD,
      payload: card,
    });
  };
};
