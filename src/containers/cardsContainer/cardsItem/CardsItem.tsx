import React, {useEffect, ChangeEvent, useCallback, useState} from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "constants/routes";
import {Card} from "store/cards/cardsActionTypes";

import IJSON from 'immutable-json'

import styles from "./CardsItem.module.scss";
import {useActions} from "hooks";
import {makeStyles} from "@material-ui/core/styles";
import {EditorState, convertToRaw, convertFromRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import formatDate from "../../../helpers/formatDate"
import CardSidebar from "../cardSidebar/cardSidebar";
import CardsForm from "../cardsForm/CardsForm";

interface CardsItemProps {
    cardData: Card;
}

interface CardInfo {
    title: string;
    description: string;
}

const CardsItem = ({cardData}: CardsItemProps) => {
    const [date, setDate] = useState(new Date(cardData.dates[0]));
    const [time, setTime] = useState(cardData.dates[1]);

    const [open, setOpen] = useState(false);
    const [cardInfo, setCardInfo] = useState<CardInfo>(cardData);

    const {deleteMeetings, getMeetings, editMeetings} = useActions();
    const [editorState, setEditorState] = useState(
        () =>
            EditorState.createWithContent(convertFromRaw(JSON.parse(cardData.description)))
    );


    useEffect(() => {
        getMeetings();
    }, [open])


    const handleChangeInput = useCallback(
        (event: ChangeEvent<HTMLInputElement>) =>
            setCardInfo((prevCardInfo) => {
                return {
                    ...prevCardInfo,
                    [event.target.name]: event.target.value,
                };
            }),
        []
    );

    const deleteCard = () => {
        deleteMeetings(cardData.id);
        getMeetings();
    };

    const openDialogForEdit = () => {
        setOpen(true);
    };

    const editCard = () => {
        const payload = {
            title: cardInfo.title,
            description: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
            dates: [date, time]
        };
        editMeetings(payload, cardData.id);
        setOpen(false);

    };

    return (
        <li className={styles.cardItem}>
            <div className={styles.cardDate}>
                <div className={styles.cardDay}>{formatDate(date)}</div>
                <div className={styles.cardTime}><p>start at</p> {time}</div>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardInfo}>
                    <div className={styles.cardTitle}>{cardInfo.title}</div>
                    <div onClick={editCard}
                         dangerouslySetInnerHTML={{__html: draftToHtml(JSON.parse(cardData.description))}}
                         className={styles.cardAgenda}/>
                </div>
                <div className={styles.cardControl}>
                    <div className={styles.cardEdit} onClick={openDialogForEdit}>Edit</div>
                    <CardSidebar
                        open={open}
                        onClose={() => setOpen(false)}
                        child={
                            <CardsForm
                            title={cardInfo.title}
                            date={date}
                            setDate={setDate}
                            time={time}
                            setTime={setTime}
                            editorState={editorState}
                            setEditorState={setEditorState}
                            editCard={editCard}
                            handleChangeInput={handleChangeInput}
                            />
                        }
                    />
                    <div className={styles.cardDelete} onClick={deleteCard}>Delete</div>
                    <div className={styles.cardCancel}>Cancel</div>
                    <div className={styles.cardView}>View</div>
                </div>
            </div>
        </li>
    );
};

export default CardsItem;
