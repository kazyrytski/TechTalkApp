import { combineReducers } from "redux";
import { cardsReducer } from "./cards/cardsReducer";

export const rootReducer = combineReducers({
  cards: cardsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
