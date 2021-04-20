import { Route, Switch } from "react-router-dom";
import { CardsPage } from "pages";
import { Header } from "components";
import { ROUTES } from "constants/routes";

const MainApp = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Route
          exact
          path={[ROUTES.getCardsListPath(), ROUTES.getCardsAddPath()]}
          component={CardsPage}
        />
      </main>
    </>
  );
};

export const Routes = () => {
  return (
    <Switch>
      <Route path={ROUTES.getStartPagePath()} component={MainApp} />
    </Switch>
  );
};
