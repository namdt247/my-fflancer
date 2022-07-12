import { all } from 'redux-saga/effects';
import {
  watchLoginSubmit,
} from './authMiddleware';

export default function* rootMiddleware() {
  yield all([
    watchLoginSubmit(),
  ]);
};
