import { Dispatch } from "redux";
import { CardsActions, Card, RickAndMortyData } from "./cardsActionTypes";
import { actionsType } from "./cardsActionTypes";
import { HttpService } from "services/server/httpService";

export const addCard = (card: Card) => (dispatch: Dispatch<CardsActions>) => {
  dispatch(actionsType.addCard(card));
};

export const getRickAndMortyData = () => async (
  dispatch: Dispatch<CardsActions>
) => {
  try {
    const res = await HttpService.get<RickAndMortyData>(
      "https://rickandmortyapi.com/api"
    );

    if (res instanceof Error) {
      throw res;
    }
    dispatch(actionsType.setRickAndMortyData(res));
  } catch (error) {
    console.error(error);
  }
};
