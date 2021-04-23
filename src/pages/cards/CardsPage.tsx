import { Route } from "react-router-dom";
import { CardsListContainer, CardContainer } from "containers";
import { ROUTES } from "constants/routes";

import styles from "./CardsPage.module.scss";

const CardsPage = () => {
  return (
    <div className={styles.cardsWrapper}>
      <Route
        exact
        path={[ROUTES.getStartPagePath(), ROUTES.CARDS.getCardsPath()]}
        component={CardsListContainer}
      />
      <Route
        exact
        path={ROUTES.CARDS.getCurrentCardPath()}
        component={CardContainer}
      />
    </div>
  );
};

export default CardsPage;
