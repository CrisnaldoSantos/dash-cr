import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducers from './index.ducks';
import Sagas from './index.sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  sagaMiddleware,
];

const store = configureStore({
  reducer: {
    ...reducers,
  },
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(Sagas);

export default store;
