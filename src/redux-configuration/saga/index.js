import {all} from 'redux-saga/effects';
import messageSaga from '../saga/messageSaga';

function* rootSaga() {
  yield all([messageSaga()]);
}

export default rootSaga;
