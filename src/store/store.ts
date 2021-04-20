import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";
import { history } from "utils/history";

const enhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware.withExtraArgument({ history }))
);
export const store = createStore(rootReducer, enhancer);
