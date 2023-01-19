import {call, put, takeLatest} from 'redux-saga/effects';
import {getMessageSuccess, getMessageFailure} from '../reducers/messageReducer';

function* getRecordTodoSaga({payload}) {
  try {
    const records = yield call(() =>
      fetch(`https://api.thecatapi.com/v1/${payload}`),
    );
    const data = yield records.json();
    yield put(getMessageSuccess(data));
  } catch (e) {
    yield put(getMessageFailure());
  }
}

function* messageSaga() {
  yield takeLatest('message/getMessageFetch', getRecordTodoSaga);
}

export default messageSaga;
