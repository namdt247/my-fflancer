import { all } from 'redux-saga/effects';
import {
  watchLoginSubmit,
} from './authMiddleware';
import {
  watchAddAccount,
  watchDeleteAccount,
  watchDetailAccount,
  watchGetListAccount,
  watchUpdateAccount
} from "./accountMiddleware";

export default function* rootMiddleware() {
  yield all([
    // login
    watchLoginSubmit(),

    // account
    watchGetListAccount(),
    watchAddAccount(),
    watchDetailAccount(),
    watchUpdateAccount(),
    watchDeleteAccount(),
  ]);
};