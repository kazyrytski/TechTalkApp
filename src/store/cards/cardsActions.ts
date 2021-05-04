import { Dispatch } from "redux";
import { CardsActions, Card, RickAndMortyData } from "./cardsActionTypes";
import { actionsType } from "./cardsActionTypes";
import { HttpService } from "services/server/httpService";

export const addCard = (card: Card) => (dispatch: Dispatch<CardsActions>) => {
  dispatch(actionsType.addCard(card));
};

export const getMeetings = () => async (
    dispatch: Dispatch<CardsActions>
) => {
  try {
    const res = await HttpService.getData<RickAndMortyData>(
        "http://localhost:5000/api/meetings"
    );

    if (res instanceof Error) {
      throw res;
    }
    dispatch(actionsType.getMeetingsList(res));
  } catch (error) {
    console.error(error);
  }
};

export const createMeetings = (payload) => async (
    dispatch: Dispatch<CardsActions>
) => {
  try {
    const res = await HttpService.post<RickAndMortyData>(
        "http://localhost:5000/api/meetings", {
          body: JSON.stringify(payload)
        }
    );

    if (res instanceof Error) {
      throw res;
    }
    dispatch(actionsType.setRickAndMortyData(res));
  } catch (error) {
    console.error(error);
  }
};
