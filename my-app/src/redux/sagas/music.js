import {
  getMusicsAPI,
  getMusicByIdAPI,
  createMusicAPI,
  updateMusicAPI,
  deleteMusicByIdAPI,
} from "../../apis";
import { setMusicSlice } from "../slice/music";
import {
  addMusicsSlice,
  deleteMusicsSlice,
  editMusicsSlice,
  getMusicsSlice,
} from "../slice/musics";
import {
  GET_MUSICS,
  GET_MUSICS_BY_ID,
  CREATE_MUSIC,
  UPDATE_MUSIC_BY_ID,
  DELETE_MUSIC_BY_ID,
} from "../types";
import { put, takeEvery } from "redux-saga/effects";

export function* getMusicsSaga() {
  const musics = yield getMusicsAPI();
  yield put(getMusicsSlice(musics.data));
}

export function* getMusicByIdSaga(action) {
 const music= yield getMusicByIdAPI(action.id);
  yield put(setMusicSlice(action.id));
}

export function* createMusicSaga(action) {
  yield createMusicAPI(action.music);
  yield put(addMusicsSlice(action.music));
}
export function* updateMusicSaga(action) {
  yield updateMusicAPI(action.music);
  yield put(editMusicsSlice(action.music));
}

export function* deleteMusicByIdSaga(action) {
  
   yield deleteMusicByIdAPI(action.id);
  yield put(deleteMusicsSlice(action.id));
}

export function* watchMusicsAsync() {
  yield takeEvery(GET_MUSICS, getMusicsSaga);
  yield takeEvery(GET_MUSICS_BY_ID, getMusicByIdSaga);
  yield takeEvery(CREATE_MUSIC, createMusicSaga);
  yield takeEvery(UPDATE_MUSIC_BY_ID, updateMusicSaga);
  yield takeEvery(DELETE_MUSIC_BY_ID, deleteMusicByIdSaga);
}
