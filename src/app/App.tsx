import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import { Routes } from "routes";
import { store } from "store/store";
import { history } from "utils/history";
import { theme } from "constants/theme";

import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Routes />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
