export interface CardsState {
  cards: Card[];
}

export enum CardsActionTypes {
  ADD_CARD = "ADD_CARD",
}

interface AddCardAction {
  type: CardsActionTypes.ADD_CARD;
  payload: Card;
}

export type CardsAction = AddCardAction;

export interface Card {
  id: string;
  title: string;
  date: string;
  description: string;
}
