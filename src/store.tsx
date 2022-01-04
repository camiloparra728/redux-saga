import { createStore, applyMiddleware } from "redux";

import { compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./redux/reducers";
import rootSaga from "./redux/sagas";
import { logger } from 'redux-logger';
const w= window as any;
const composeEnhancers = w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddle = createSagaMiddleware();
const middelware = [sagaMiddle]

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middelware,logger))
  );

  sagaMiddle.run(rootSaga);

  return store;
}
