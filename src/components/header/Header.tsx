import { useState, ChangeEvent, useCallback } from "react";
import { Button, Dialog, Input } from "components";
import { makeStyles } from "@material-ui/core/styles";
import { useActions } from "hooks";
import { v4 as uuidv4 } from "uuid";

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
    height: 400,
    width: 300,
    padding: 10,
  },
  input: {
    marginBottom: 20,
  },
});

const initCardInfo = { title: "", description: "" };

export default function Header() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [cardInfo, setCardInfo] = useState<CardInfo>(initCardInfo);

  const { addCard } = useActions();

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

  const onSaveCard = () => {
    const newCard = {
      id: uuidv4(),
      // title: cardInfo.title,
      // agenda: cardInfo.agenda,
      // day: new Date().getUTCDate(),
      // month: new Date().toLocaleString("default", { month: "short" }),
      title:  cardInfo.title,
      description: cardInfo.description,
    };
    addCard(newCard);
    setOpen(false);
    setCardInfo(initCardInfo);
  };

  return (
    <header className={classes.header}>
      <h3 className="header_title">Tech Talks App</h3>
      <Button onClick={() => setOpen(true)}> Add Card</Button>
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
            containerClasses={classes.input}
            onChange={handleChangeInput}
          />
          <Input label="Agenda" name="agenda" onChange={handleChangeInput} />
        </form>

        <Button
          onClick={onSaveCard}
          disabled={!(!!cardInfo.title && !!cardInfo.description)}
        >
          {" "}
          save card
        </Button>
      </Dialog>
    </header>
  );
}
