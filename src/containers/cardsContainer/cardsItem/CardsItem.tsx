import { Link } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { Card } from "store/cards/cardsActionTypes";

import styles from "./CardsItem.module.scss";
import { useActions } from "hooks";
import {ChangeEvent, useCallback, useState} from "react";
import { Button, Dialog, Input } from "components";
import {makeStyles} from "@material-ui/core/styles";

interface CardsItemProps {
    cardData: Card;
}

const useStyles = makeStyles({
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: 80,
        padding: "0 20px",
        backgroundColor: "#282c34",
        fontSize: 24,
        color: "#61dafb",
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 400,
        width: 300,
        padding: 10,
    },
    input: {
        marginBottom: 20,
    },
});

const CardsItem = ({ cardData }: CardsItemProps) => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const { deleteMeetings, getMeetings, editMeetings } = useActions();

    // const handleChangeInput = useCallback(
    //     (event: ChangeEvent<HTMLInputElement>) =>
    //         setCardInfo((prevCardInfo) => {
    //             return {
    //                 ...prevCardInfo,
    //                 [event.target.name]: event.target.value,
    //             };
    //         }),
    //     []
    // );

    const deleteCard = () => {
        let cardId = cardData.participants.map(item => item._id);
        deleteMeetings(cardId);
        getMeetings();
    };

    const openDialogForEdit = () => {
        setOpen(true);
    };

    const editCard = () => {
        const payload = {
            title: cardData.title,
            description: cardData.description,
        };
        let cardId = cardData.participants.map(item => item._id);
        editMeetings(payload, cardId);
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
                    <div className={styles.cardEdit} onClick={openDialogForEdit}>Edit</div>
                    <Dialog
                        open={open}
                        onClose={() => setOpen(false)}
                        classes={{
                            paper: classes.paper,
                        }}
                    >
                        <form action="">
                            <Input
                                label="Title"
                                name="title"
                                value={cardData.title}
                                containerClasses={classes.input}
                                // onChange={handleChangeInput}
                            />
                            <Input
                                label="Agenda"
                                name="agenda"
                                value={cardData.description}
                                // onChange={handleChangeInput}
                            />
                        </form>

                        <Button
                            onClick={editCard}
                            disabled={!(!!cardData.title && !!cardData.description)}
                        >
                            {" "}
                            edit card
                        </Button>
                    </Dialog>
                    <div className={styles.cardDelete} onClick={deleteCard}>Delete</div>
                    <div className={styles.cardCancel}>Cancel</div>
                    <div className={styles.cardView}>View</div>
                </div>
            </div>
        </li>
    );
};

export default CardsItem;
