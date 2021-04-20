import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { Routes } from "routes";
import { store } from "store/store";
import { history } from "utils/history";

import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
