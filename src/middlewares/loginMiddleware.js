import { takeEvery } from 'redux-saga/effects';
import { authActionTypes } from '../requests/api/authApi';

function* loginSubmit(params) {
  return yield params;
}

export function* watchLoginSubmit() {
  yield takeEvery(authActionTypes.LOGIN_SUBMIT, loginSubmit);
}

function* logoutSubmit() {
  // const response = yield API.requestPostAPI('/logout');
  // ModelManager.setToken(null);
  // ModelManager.clearLocalStorage();
  // if (response && response.status === APICode.SUCCESS) {
  //   yield put({
  //     type: loginActionType.LOGOUT_SUCCESS,
  //     data: response.data,
  //   });
  // } else {
  //   yield put({
  //     type: loginActionType.LOGOUT_FAILED,
  //     message: response ? response.message : '',
  //   });
  // }
}

export function* watchLogoutSubmit() {
  yield takeEvery(authActionTypes.LOGOUT_SUBMIT, logoutSubmit);
}
