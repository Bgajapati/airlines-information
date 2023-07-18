import { all, call, put, fork, takeLatest } from "redux-saga/effects";

import { ActionTypes } from "./actionTypes";

import {
  getAirlinesListSuccess,
  getAirlinesListApiError,
  getAirlineSuccess,
  getAirlineApiError,
  addAirlineSuccess,
  addAirlineApiError,
} from "./actions";

import {
  fetchAirlinesList,
  fetchAirline,
  createAirline,
} from "../../helpers/backend_helper";

// Custom generic error message
const errorMsg =
  "Somethings went wrong with API server, Please try after sometime.";

function* GetAirlines() {
  try {
    const response = yield call(fetchAirlinesList);

    if (response !== undefined) {
      yield put(getAirlinesListSuccess(response?.data));
    } else {
      yield put(getAirlinesListApiError(response | errorMsg));
    }
  } catch (error) {
    yield put(getAirlinesListApiError(error | errorMsg));
  }
}

function* GetAirline({ payload }) {
  try {
    const response = yield call(fetchAirline, payload);
    if (response) {
      yield put(getAirlineSuccess(response?.data));
    } else {
      yield put(getAirlineApiError(response | errorMsg));
    }
  } catch (error) {
    console.log(error);
    yield put(getAirlineApiError(error | errorMsg));
  }
}

function* AddAirline({ payload }) {
  try {
    const response = yield call(createAirline, payload);
    if (response) {
      yield put(addAirlineSuccess(response?.data));
    } else {
      yield put(addAirlineApiError(response | errorMsg));
    }
  } catch (error) {
    yield put(addAirlineApiError(error | errorMsg));
  }
}

export function* WatchGetAirlines() {
  yield takeLatest(ActionTypes.AIRLINES_GET_LIST, GetAirlines);
}

export function* WatchGetAirline() {
  yield takeLatest(ActionTypes.AIRLINES_GET_AIRLINE, GetAirline);
}

export function* WatchAddAirlines() {
  yield takeLatest(ActionTypes.AIRLINES_CREATE, AddAirline);
}

function* AirlinesSaga() {
  yield all([
    fork(WatchGetAirlines),
    fork(WatchGetAirline),
    fork(WatchAddAirlines),
  ]);
}

export default AirlinesSaga;
