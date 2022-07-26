import { takeEvery, put } from 'redux-saga/effects';
import { authAPI } from '../requests/api/authAPI';
import API from '../requests/fetchAPI';
import APICode from '../utils/APICode';
import ModelManager from '../utils/ModelManager';
import { authActionTypes } from '../actions/types/authActionTypes';

function* loginSubmit({ params }) {
  const response = yield API.requestPostAPI(authAPI.URL_LOGIN, params);

  if (response && parseInt(response.status) === APICode.SUCCESS) {
    ModelManager.setToken(response.data?.credential?.accessToken)
      .then(ModelManager.setUserName(response.data?.account?.username || '')
        .then(ModelManager.setUserId(response.data?.account?.id || '')
          .then(
            yield put({
              type: authActionTypes.LOGIN_SUCCESS,
              status: response.status,
            }),
          ),
        ),
      );
  } else {
    yield put({
      type: authActionTypes.LOGIN_FAILED,
      message: response.message,
      status: response.status,
    });
  }
}

export function* watchLoginSubmit() {
  yield takeEvery(authActionTypes.LOGIN_SUBMIT, loginSubmit);
}

function* logoutSubmit() {
  const response = yield API.requestPostAPI(authAPI.URL_LOGOUT);

  if (response && response.status === APICode.SUCCESS) {
    yield put({
      type: authActionTypes.LOGOUT_SUCCESS,
      data: response.data,
    });
  } else {
    yield put({
      type: authActionTypes.LOGOUT_FAILED,
      message: response ? response.message : '',
    });
  }
}

export function* watchLogoutSubmit() {
  yield takeEvery(authActionTypes.LOGOUT_SUBMIT, logoutSubmit);
}
