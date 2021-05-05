import { v4 as uuidv4 } from "uuid";
import { CardsActions, CardsActionTypes, CardsState } from "./cardsActionTypes";

const initialState: CardsState = {
  cardList: [

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
    case CardsActionTypes.GET_MEETINGS_LIST:
      return {
        ...state,
        cardList: action.payload,
      };
    default:
      return state;
  }
};
