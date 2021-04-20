import { useActions } from "hooks";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";

const CardsForm = () => {
  let history = useHistory();
  const { addCard } = useActions();

  const handleCardClick = () => {
    const id = uuidv4();
    const newCard = {
      id,
      title: `Some title - ${id}`,
      date: new Date().toDateString(),
      description: `Some desc - ${id}`,
    };
    addCard(newCard);
    history.push("/cards/list");
  };

  return (
    <div>
      <h1>Add Card</h1>
      <button onClick={handleCardClick}>Add New Card</button>
    </div>
  );
};

export default CardsForm;
