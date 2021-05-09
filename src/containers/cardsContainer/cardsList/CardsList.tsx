import { useActions, useTypedSelector } from "hooks";
import CardsItem from "../cardsItem/CardsItem";
import { Card } from "store/cards/cardsActionTypes";
import {ClassAttributes, useEffect} from "react";
import groupByDay from "../../../helpers/groupByDay";

const CardsList = () => {

  const { getMeetings } = useActions();

  useEffect(() => {
    getMeetings();
  }, []);


  const { cardList } = useTypedSelector((state) => state.cards);

  useEffect(() => {
    console.log(groupByDay(cardList))
  }, [cardList])



  return (
      <ul>
        {groupByDay(cardList).map((card: Card) => {
          return <CardsItem cardData={card} key={card.id} />;
        })}
      </ul>
  );
};

export default CardsList;
