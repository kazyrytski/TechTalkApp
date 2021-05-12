import React, {useEffect, ChangeEvent, useCallback, useState} from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "constants/routes";
import {Card} from "store/cards/cardsActionTypes";

import IJSON from 'immutable-json'

import styles from "./CardsItem.module.scss";
import {useActions} from "hooks";
import {Button, Dialog, Input} from "components";
import {makeStyles} from "@material-ui/core/styles";
import {Editor} from 'react-draft-wysiwyg';
import {EditorState, convertToRaw, convertFromRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import {Map} from 'immutable';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import CustomDatePicker from "../../../components/datePicker/DatePicker";
import formatDate from "../../../helpers/formatDate"
import CardSidebar from "../cardSidebar/cardSidebar";

interface CardsItemProps {
    cardData: Card;
}

interface CardInfo {
    title: string;
    description: string;
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
        minHeight: "70%",
        maxWidth: 1000,
        padding: 10,
    },
    input: {
        marginBottom: 20,
    },
});


const CardsItem = ({cardData}: CardsItemProps) => {

    const initCardInfo = {title: "", description: ""};
    const [date, setDate] = useState(new Date(cardData.dates[0]));
    const [time, setTime] = useState(cardData.dates[1]);

    const classes = useStyles();
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

    const cardForm = (
        <>
            <form action="">
                <Input
                    label="Title"
                    name="title"
                    value={cardInfo.title}
                    containerClasses={classes.input}
                    onChange={handleChangeInput}
                />

                <CustomDatePicker date={date} setDate={setDate} time={time} setTime={setTime}/>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={setEditorState}
                />
            </form>

            <Button
                onClick={editCard}
                // disabled={!(!!cardData.title && !!cardData.description)}
            >
                {" "}
                edit card
            </Button>
        </>
    )

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
                        child={cardForm}
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
