import { applyMiddleware, compose, createStore } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../root/root.reducer";
import rootSaga from "../root/root.sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");

  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
