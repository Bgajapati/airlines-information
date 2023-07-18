import {all, fork} from 'redux-saga/effects';

// Sagas
import AirlinesSaga from "../services/airlines/sagas";

export default function* rootSaga() {
    yield all([
        fork(AirlinesSaga),
    ]);
}
