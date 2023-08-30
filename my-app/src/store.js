import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import music from './redux/slice/music';
import musics from './redux/slice/musics';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    music,
    musics,
  }, // Missing comma here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

