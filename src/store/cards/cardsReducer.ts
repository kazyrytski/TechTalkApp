import { v4 as uuidv4 } from "uuid";
import { CardsAction, CardsActionTypes, CardsState } from "./cardsActionTypes";

const initialState: CardsState = {
  cards: [
    {
      id: uuidv4(),
      title: "Some title1",
      agenda: "Some agenda",
      day: new Date().getUTCDate(),
      month: new Date().toLocaleString("default", { month: "short" }),
    },
    {
      id: uuidv4(),
      title: "Some title2",
      agenda: "Some agenda2",
      day: new Date().getUTCDate(),
      month: new Date().toLocaleString("default", { month: "short" }),
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
