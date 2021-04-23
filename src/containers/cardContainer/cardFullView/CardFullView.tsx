import { useParams } from "react-router-dom";
import { useTypedSelector, useActions } from "hooks";
import { cardSelector } from "store/cards/cardsSelector";
import { useEffect } from "react";

interface ParamTypes {
  id: string;
}

const CardFullView = () => {
  const { id } = useParams<ParamTypes>();

  const card = useTypedSelector(cardSelector(id));
  const { rickAndMortyData } = useTypedSelector((state) => state.cards);
  const { getRickAndMortyData } = useActions();

  useEffect(() => {
    getRickAndMortyData();
  }, []);

  return (
    <>
      <div>{card && card.title}</div>
      <div>{card && card.agenda}</div>
      <div>{rickAndMortyData && rickAndMortyData.characters}</div>
    </>
  );
};

export default CardFullView;
