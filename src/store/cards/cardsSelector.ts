import { createSelector } from "reselect";

import { RootState } from "store/rootReducer";

const getCardsList = (state: RootState) => state.cards.cardList;

export const cardSelector = (id: string) =>
  createSelector(getCardsList, (cards) => cards.find((card) => card.id === id));
