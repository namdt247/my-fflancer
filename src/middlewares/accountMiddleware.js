import API from "../requests/fetchAPI";
import { userAPI } from "../requests/api/userAPI";
import { put, takeEvery } from "redux-saga/effects";
import APICode from "../utils/APICode";
import { userActionTypes } from "../actions/types/userActionTypes";

function* getListAccount({params}) {
  const response = yield API.requestGetAPI(userAPI.URL_LIST_ACCOUNT, params);
  if (response && parseInt(response.status) === APICode.SUCCESS) {
    yield put({
      type: userActionTypes.GET_LIST_ACCOUNT_SUCCESS,
      data: response.data,
      status: response.status,
    });
  } else {
    yield put({
      type: userActionTypes.GET_LIST_ACCOUNT_FAILED,
      message: response ? response.message : '',
    });
  }
}

export function* watchGetListAccount() {
  yield takeEvery(userActionTypes.GET_LIST_ACCOUNT, getListAccount);
}

function* addAccount({params}) {
  const response = yield API.requestPostAPI(userAPI.URL_CREATE_ACCOUNT, params);
  if (response && parseInt(response.status) === APICode.SUCCESS) {
    yield put({
      type: userActionTypes.ADD_ACCOUNT_SUCCESS,
      data: response.data,
      status: response.status,
    });
  } else {
    yield put({
      type: userActionTypes.ADD_ACCOUNT_FAILED,
      message: response ? response.message : '',
    });
  }
}

export function* watchAddAccount() {
  yield takeEvery(userActionTypes.ADD_ACCOUNT, addAccount);
}

function* detailAccount({params}) {
  const response = yield API.requestGetAPI(userAPI.URL_DETAIL_ACCOUNT, params);
  if (response && parseInt(response.status) === APICode.SUCCESS) {
    yield put({
      type: userActionTypes.DETAIL_ACCOUNT_SUCCESS,
      data: response.data,
      status: response.status,
    });
  } else {
    yield put({
      type: userActionTypes.DETAIL_ACCOUNT_FAILED,
      message: response ? response.message : '',
    });
  }
}

export function* watchDetailAccount() {
  yield takeEvery(userActionTypes.DETAIL_ACCOUNT, detailAccount);
}

function* updateAccount({params}) {
  const response = yield API.requestPostAPI(userAPI.URL_UPDATE_ACCOUNT, params);
  if (response && parseInt(response.status) === APICode.SUCCESS) {
    yield put({
      type: userActionTypes.UPDATE_ACCOUNT_SUCCESS,
      data: response.data,
      status: response.status,
    });
  } else {
    yield put({
      type: userActionTypes.UPDATE_ACCOUNT_FAILED,
      message: response ? response.message : '',
    });
  }
}

export function* watchUpdateAccount() {
  yield takeEvery(userActionTypes.UPDATE_ACCOUNT, updateAccount);
}

function* deleteAccount({params}) {
  const response = yield API.requestGetAPI(userAPI.URL_DELETE_ACCOUNT, params);
  if (response && parseInt(response.status) === APICode.SUCCESS) {
    yield put({
      type: userActionTypes.DELETE_ACCOUNT_SUCCESS,
      data: response.data,
      status: response.status,
    });
  } else {
    yield put({
      type: userActionTypes.DELETE_ACCOUNT_FAILED,
      message: response ? response.message : '',
    });
  }
}

export function* watchDeleteAccount() {
  yield takeEvery(userActionTypes.DELETE_ACCOUNT, deleteAccount);
}