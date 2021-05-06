import { Link } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { Card } from "store/cards/cardsActionTypes";

import styles from "./CardsItem.module.scss";
import {useActions} from "hooks";

interface CardsItemProps {
    cardData: Card;
}

const CardsItem = ({ cardData }: CardsItemProps) => {

    const { deleteMeetings, getMeetings } = useActions();

    const deleteCard = () => {
        let cardId = cardData.participants.map(item => item._id);
        deleteMeetings(cardId);
        getMeetings();
    };

    return (
        <li className={styles.cardItem}>
            <div className={styles.cardDate}>
                <div className={styles.cardDay}>{cardData.dates}</div>
                <div className={styles.cardMonth}>{cardData.dates}</div>
            </div>

            <div className={styles.cardContent}>
                <div className={styles.cardInfo}>
                    <div className={styles.cardTitle}>{cardData.title}</div>
                    <div className={styles.cardAgenda}>{cardData.description}</div>
                </div>
                <div className={styles.cardControl}>
                    {/*<Link*/}
                    {/*    to={`${ROUTES.CARDS.getCardsPath()}/${cardData.id}`}*/}
                    {/*    className={styles.cardEdit}*/}
                    {/*>*/}
                    {/*    Edit*/}
                    {/*</Link>*/}
                    <div className={styles.cardEdit} onClick={deleteCard}>Edit</div>
                    <div className={styles.cardDelete} onClick={deleteCard}>Delete</div>
                    <div className={styles.cardCancel}>Cancel</div>
                    <div className={styles.cardView}>View</div>
                </div>
            </div>
        </li>
    );
};

export default CardsItem;
