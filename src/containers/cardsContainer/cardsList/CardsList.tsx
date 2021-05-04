import { useActions, useTypedSelector } from "hooks";
import CardsItem from "../cardsItem/CardsItem";
import { Card } from "store/cards/cardsActionTypes";
import { useEffect } from "react";

const CardsList = () => {

  const { getMeetings } = useActions();

  useEffect(() => {
    getMeetings();
  }, []);

  const { cardList } = useTypedSelector((state) => state.cards);

  return (
      <ul>
        {cardList.map((card: Card) => {
          return <CardsItem cardData={card} key={card.id} />;
        })}
      </ul>
  );
};

export default CardsList;
