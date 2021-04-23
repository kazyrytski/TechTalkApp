import { Link } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { Card } from "store/cards/cardsActionTypes";

import styles from "./CardsItem.module.scss";

interface CardsItemProps {
  cardData: Card;
}

const CardsItem = ({ cardData }: CardsItemProps) => {
  return (
    <li className={styles.cardItem}>
      <div className={styles.cardDate}>
        <div className={styles.cardDay}>{cardData.day}</div>
        <div className={styles.cardMonth}>{cardData.month}</div>
      </div>

      <div className={styles.cardContent}>
        <div className={styles.cardInfo}>
          <div className={styles.cardTitle}>{cardData.title}</div>
          <div className={styles.cardAgenda}>{cardData.agenda}</div>
        </div>
        <div className={styles.cardControl}>
          <div className={styles.cardEdit}>Edit</div>
          <div className={styles.cardDelete}>Delete</div>
          <div className={styles.cardCancel}>Cancel</div>
          <Link
            to={`${ROUTES.CARDS.getCardsPath()}/${cardData.id}`}
            className={styles.cardView}
          >
            View
          </Link>
        </div>
      </div>
    </li>
  );
};

export default CardsItem;