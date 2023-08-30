import {all} from 'redux-saga/effects';
import { watchMusicsAsync } from './music';

export function* rootSaga() {
    console.log("Saga called");
    yield all([
      watchMusicsAsync()
    ])
  }
  