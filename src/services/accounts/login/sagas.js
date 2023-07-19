import { all, call, put, fork, takeLatest } from "redux-saga/effects";

import { ActionTypes } from "./actionTypes";

import { accountLoginSuccess, accountLoginApiError } from "./actions";

import { loginAccount } from "../../../helpers/backend_helper";

// Custom generic error message
const errorMsg =
  "Somethings went wrong with API server, Please try after sometime.";

function* AccountLogin() {
  try {
    const response = yield call(loginAccount);

    if (response !== undefined) {
      yield put(accountLoginSuccess(response?.data));
    } else {
      yield put(accountLoginApiError(response | errorMsg));
    }
  } catch (error) {
    yield put(accountLoginApiError(error | errorMsg));
  }
}

export function* WatchAccountLogin() {
  yield takeLatest(ActionTypes.AIRLINES_ACCOUNT_LOGIN, AccountLogin);
}

function* AccountLoginSaga() {
  yield all([fork(WatchAccountLogin)]);
}

export default AccountLoginSaga;
