import { v4 as uuidv4 } from "uuid";
import { CardsActions, CardsActionTypes, CardsState } from "./cardsActionTypes";

const initialState: CardsState = {
  cardList: [
    {
      id: uuidv4(),
      title: "Some title1",
      description: "Some agenda",
    },
    {
      id: uuidv4(),
      title: "Some title2",
      description: "Some agenda2",
    },
  ],
  rickAndMortyData: null,
};

export const cardsReducer = (
  state = initialState,
  action: CardsActions
): CardsState => {
  switch (action.type) {
    case CardsActionTypes.ADD_CARD:
      return {
        ...state,
        cardList: [...state.cardList, action.payload],
      };
    case CardsActionTypes.SET_RICK_AND_MORTY_DATA:
      return {
        ...state,
        rickAndMortyData: action.payload,
      };
    default:
      return state;
  }
};
