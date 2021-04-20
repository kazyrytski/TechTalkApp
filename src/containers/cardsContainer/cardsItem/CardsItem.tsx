import { Card } from "store/cards/cardsActionTypes";

interface CardsItemProps {
  cardData: Card;
}

const CardsItem = ({ cardData }: CardsItemProps) => {
  return (
    <li className="card__item">
      <div className="card__title">{cardData.title}</div>
      <div className="card__date">{cardData.date}</div>
      <div className="card__desc">{cardData.description}</div>
    </li>
  );
};

export default CardsItem;
