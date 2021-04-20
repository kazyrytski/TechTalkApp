import { v4 as uuidv4 } from "uuid";
import { CardsAction, CardsActionTypes, CardsState } from "./cardsActionTypes";

const initialState: CardsState = {
  cards: [
    {
      id: uuidv4(),
      title: "Some title1",
      date: new Date().toDateString(),
      description: "Some Desc1",
    },
    {
      id: uuidv4(),
      title: "Some title2",
      date: new Date().toDateString(),
      description: "Some Desc2",
    },
  ],
};

export const cardsReducer = (
  state = initialState,
  action: CardsAction
): CardsState => {
  switch (action.type) {
    case CardsActionTypes.ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    default:
      return state;
  }
};
