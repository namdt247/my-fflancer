import { all } from 'redux-saga/effects';
import {
  watchLoginSubmit,
  watchLogoutSubmit,
} from './loginMiddleware';

export default function* rootMiddleware() {
  yield all([
    watchLoginSubmit(),
    watchLogoutSubmit(),
  ]);
};
