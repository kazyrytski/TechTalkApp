import CustomDatePicker from "../../../components/datePicker/DatePicker";
import React from "react";
import {Button, Input} from "components";
import {Editor} from 'react-draft-wysiwyg';
import {makeStyles} from "@material-ui/core/styles";

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
    formWrapper: {
        width: "90%",
    }
});

const CardsForm = ({
                       title,
                       date,
                       setDate,
                       time,
                       setTime,
                       editorState,
                       setEditorState,
                       editCard,
                       handleChangeInput
                   }) => {
    const classes = useStyles();
    return (
        <div className={classes.formWrapper}>
            <form action="">
                <Input
                    label="Title"
                    name="title"
                    value={title}
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
                    toolbar={{
                        options: ['inline', 'colorPicker', 'link', 'embedded', 'emoji', 'image'],
                        colorPicker: {inDropdown: true},
                        link: {inDropdown: true},
                        embedded: {inDropdown: true},
                        emoji: {inDropdown: true},
                        image: {inDropdown: true},
                    }}

                />
            </form>

            <Button
                onClick={editCard}
                disabled={!title}
                style={{
                    width: '100%'
                }}
            >
                {" "}
                edit card
            </Button>
        </div>
    );
};

export default CardsForm;
