import { PropertiesTypes } from "constants/types";
export interface CardsState {
  cardList: Card[];
  rickAndMortyData: RickAndMortyData | null;
}

export enum CardsActionTypes {
  ADD_CARD = "ADD_CARD",
  SET_RICK_AND_MORTY_DATA = "SET_RICK_AND_MORTY_DATA",
}
export interface Card {
  id: string;
  title: string;
  agenda: string;
  day: number;
  month: string;
}

export interface RickAndMortyData {
  characters: string;
  locations: string;
  episodes: string;
}

export const actionsType = {
  addCard: (card: Card) =>
    ({
      type: CardsActionTypes.ADD_CARD,
      payload: card,
    } as const),
  setRickAndMortyData: (data: RickAndMortyData) =>
    ({
      type: CardsActionTypes.SET_RICK_AND_MORTY_DATA,
      payload: data,
    } as const),
};

export type CardsActions = PropertiesTypes<typeof actionsType>;
