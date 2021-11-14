import { combineReducers } from "redux";
import { createStore } from "redux";

import { Find } from "./Find";


const reducer = combineReducers({
  Find
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
