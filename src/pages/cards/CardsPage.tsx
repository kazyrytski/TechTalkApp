import { Route } from "react-router-dom";
import { CardsListContainer, CardsAddContainer } from "containers";
import { ROUTES } from "constants/routes";

const CardsPage = (props) => {
  console.log(props);

  return (
    <div>
      <Route path={ROUTES.getCardsListPath()} component={CardsListContainer} />
      <Route path={ROUTES.getCardsAddPath()} component={CardsAddContainer} />
    </div>
  );
};

export default CardsPage;
