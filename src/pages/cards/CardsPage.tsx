import { Route } from "react-router-dom";
import { CardsListContainer } from "containers";
import { ROUTES } from "constants/routes";

const CardsPage = () => {
  return (
    <div>
      <Route path={ROUTES.getCardsListPath()} component={CardsListContainer} />
    </div>
  );
};

export default CardsPage;
