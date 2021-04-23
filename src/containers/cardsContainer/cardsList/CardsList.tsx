import { useTypedSelector } from "hooks";
import CardsItem from "../cardsItem/CardsItem";
import { Card } from "store/cards/cardsActionTypes";

const CardsList = () => {
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
