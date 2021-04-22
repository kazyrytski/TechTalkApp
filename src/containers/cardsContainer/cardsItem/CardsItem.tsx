import { Card } from "store/cards/cardsActionTypes";

interface CardsItemProps {
  cardData: Card;
}

const CardsItem = ({ cardData }: CardsItemProps) => {
  return (
    <li className="card__item">
      <div className="card__title">{cardData.title}</div>
      <div className="card__agenda">{cardData.agenda}</div>
      <div className="card__day">{cardData.day}</div>
      <div className="card__month">{cardData.month}</div>
    </li>
  );
};

export default CardsItem;
